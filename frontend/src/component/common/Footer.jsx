import React from 'react';
import { NavLink } from 'react-router-dom';
import ApiService from '../../service/ApiService';

const FooterComponent = () => {
    const isAuthenticated = ApiService.isAuthenticated();
    const isAdmin = ApiService.isAdmin();
    const isUser = ApiService.isUser();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>HT Hotel</h4>
                    <p>Email: info@hthotel.com</p>
                    <p>Phone: +84 123 456 789</p>
                    <p>Address: Thu Duc, Ho Chi Minh, Vietnam</p>
                </div>
                <div className="footer-section">
                    <h4>Explore</h4>
                    <ul>
                        <li><NavLink to="/home" activeclassname="active">Home</NavLink></li>
                        <li><NavLink to="/rooms" activeclassname="active">Rooms</NavLink></li>
                        <li><NavLink to="/find-booking" activeclassname="active">Find my Booking</NavLink></li>
                        {isUser && <li><NavLink to="/profile" activeclassname="active">Profile</NavLink></li>}
                        {isAdmin && <li><NavLink to="/admin" activeclassname="active">Admin</NavLink></li>}
                        {!isAuthenticated && <li><NavLink to="/login" activeclassname="active">Login</NavLink></li>}
                        {!isAuthenticated && <li><NavLink to="/register" activeclassname="active">Register</NavLink></li>}
                        {isAuthenticated && <li><NavLink to="/home" onClick={() => ApiService.logout()} activeclassname="active">Logout</NavLink></li>}
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <p>Stay connected with us on social media!</p>
                    {/* Thêm icon hoặc liên kết mạng xã hội nếu có */}
                </div>
            </div>
            <div className="footer-bottom">
                <p>HT Hotel | All Right Reserved © {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default FooterComponent;