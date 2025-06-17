import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';

const EditProfilePage = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await ApiService.getUserProfile();
                setUser(response.user);
            } catch (error) {
                setError(error.message || "Failed to fetch profile");
            }
        };

        fetchUserProfile();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleUpdateProfile = async () => {
        try {
            const updatedUser = {
                name: user.name,
                phoneNumber: user.phoneNumber
            };
            const response = await ApiService.updateUserProfile(updatedUser);
            setSuccessMessage("Profile updated successfully!");
        } catch (error) {
            setError(error.response?.data?.message || "Failed to update profile");
        }
    };

    const handleDeleteProfile = async () => {
        if (!window.confirm('Are you sure you want to delete your account?')) {
            return;
        }
        try {
            await ApiService.deleteUser(user.id);
            navigate('/signup');
        } catch (error) {
            setError(error.message || "Failed to delete profile");
        }
    };

    return (
        <div className="edit-profile-page">
            <h2>Edit Profile</h2>
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            {user && (
                <div className="profile-details">
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Email (read-only):</label>
                        <input
                            type="text"
                            value={user.email}
                            disabled
                            className="form-control disabled"
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={user.phoneNumber}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                    <div className="button-group">
                        <button className="update-button" onClick={handleUpdateProfile}>
                            Update Profile
                        </button>
                        <button className="delete-button" onClick={handleDeleteProfile}>
                            Delete Profile
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditProfilePage;