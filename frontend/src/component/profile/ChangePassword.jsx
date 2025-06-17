import React, { useState } from 'react';
import ApiService from '../../service/ApiService';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const changePasswordRequest = { oldPassword, newPassword };
            await ApiService.changePassword(changePasswordRequest);
            setSuccess('Password changed successfully!');
            setError('');
        } catch (err) {
            setError(err || 'An error occurred');
            setSuccess('');
        }
    };

    return (
        <div className="change-password-container">
            <h2>Change Password</h2>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Old Password:</label>
                    <input
                        type="password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>New Password:</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="update-button">Change Password</button>
            </form>
        </div>
    );
};

export default ChangePassword;