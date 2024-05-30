import React, { useState } from 'react';
import './input.css';
import Mail from '../../assets/mail.png';
import Key from '../../assets/key.png';
import { useAuth } from '../../routes/AuthContext'; // Import useAuth hook
import Loading from '../../components/loading/Loading'; // Import the Loading component

const Input = () => {
    const [formData, setFormData] = useState({
        password: '',
        email: ''
    });
    const [loading, setLoading] = useState(false); // State for loading animation
    const { loginAsAdmin } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading animation
        try {
            // Simulate authentication with hardcoded admin credentials
            const adminUsername = 'admin@example.com';
            const adminPassword = 'admin123';

            if (formData.email === adminUsername && formData.password === adminPassword) {
                // If admin credentials match, login as admin
                loginAsAdmin();
                // Simulate delay before redirecting to admin dashboard
                setTimeout(() => {
                    window.location.href = '/admin'; // Redirect to admin dashboard
                }, 1000); // Adjust the delay as needed
            } else {
                // Handle incorrect credentials
                console.error('Invalid username or password');
            }
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            setLoading(false); // Stop loading animation
        }
    };

    return (
        <div className='all_input'>
            {loading && <Loading />} {/* Render loading animation when loading is true */}
            <form id="container" onSubmit={handleSubmit}>
                <div className="inputEU">
                    <div className="email">
                        <label htmlFor="email">
                            <span><img src={Mail} alt="" /></span>
                            <input
                                type="email"
                                placeholder=" Type your email"
                                name="email"
                                id='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="password">
                        <label htmlFor="password">
                            <span><img id='key' src={Key} alt="" /></span>
                            <input
                                type="password"
                                placeholder="Type your password"
                                id='password'
                                value={formData.password}
                                onChange={handleChange}
                                name="password"
                            />
                        </label>
                    </div>
                </div>
                <button id='sub' disabled={loading}>Submit</button>
            </form>
           
        </div>
    );
};

export default Input;
