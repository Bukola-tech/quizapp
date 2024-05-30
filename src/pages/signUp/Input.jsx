import React, { useState } from 'react';
import { useUserData } from '../../context/UserContext';
import './Input.css';
import axios from 'axios';
import Mail from '../../assets/mail.png';
import Key from '../../assets/key.png';
import ID from '../../assets/d-card.png';
import Loading from '../../components/loading/Loading'; // Import the Loading component

const Input = () => {
  const { users, updateUser } = useUserData(); // Destructure users from useUserData

  const [formData, setFormData] = useState({
    password: '',
    email: '',
    firstName: '',
    lastName: '',
  });

  const [loading, setLoading] = useState(false); // State to control loading animation

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
      const response = await axios.post(
        'https://questionsapi.onrender.com/auth/signup',
        formData
      );
      console.log('Signup successful:', response.data);
      updateUser([...users, formData]);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
      // Navigate after a delay to allow time for the loading animation
      setTimeout(() => {
        window.location.href = '/login'; // Redirect to the next page
      }, 1000); // Adjust the delay as needed
    } catch (error) {
      console.error('Signup failed:', error.response ? error.response.data : error.message);
    } finally {
      setLoading(false); // Stop loading animation
    }
  };

  return (
    <div className='all_input'>
      {loading && <Loading />} {/* Render loading animation when loading is true */}
      <form id='container' onSubmit={handleSubmit}>
        <div className='inputEU'>
          <div className='fullName'>
            <label htmlFor='firstName'>
              <span><img src={ID} alt='' /></span>
              <input
                type='text'
                placeholder=' Type your First Name'
                name='firstName'
                id='firstName'
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className='fullName'>
            <label htmlFor='lastName'>
              <span><img src={ID} alt='' /></span>
              <input
                type='text'
                placeholder=' Type your Last Name'
                name='lastName'
                id='lastName'
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className='email'>
            <label htmlFor='email'>
              <span><img src={Mail} alt='' /></span>
              <input
                type='email'
                placeholder=' Type your email'
                name='email'
                id='email'
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className='password'>
            <label htmlFor='password'>
              <span><img id='key' src={Key} alt='' /></span>
              <input
                type='password'
                placeholder='Type your password'
                id='password'
                value={formData.password}
                onChange={handleChange}
                name='password'
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
