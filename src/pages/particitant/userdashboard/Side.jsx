import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';

const Home = () => <h1>Home Page</h1>;
const Profile = () => <h1>Profile Page</h1>;
const Settings = () => <h1>Settings Page</h1>;
const Logout = () => <h1>Logout Page</h1>;

const Side = () => {
  // Define menu items with links and icons
  const menuItems = [
    { text: 'Home', link: '/', icon: '🏠' },
    { text: 'Profile', link: '/userdashboard/profile', icon: '👤' },
    { text: 'Settings', link: '/userdashboard/settings', icon: '⚙️' },
    {text:'Take Customized Quiz', link:"/userdashboard/takeQuiz",icon: "🚴‍♂️"},
    { text: 'Logout', link: '/logout', icon: '🚪' }
  ];

  return (
    <div>
      <div >
        {/* Sidebar component with menu items */}
        <Sidebar menuItems={menuItems} />

        {/* Main content area */}
        <div>
          {/* Define routes for main content */}
          <div>
            < exact path="/" element={<Home />} />
            <div path="/profile" element={<Profile />} />
            <div path="/settings" element={<Settings />} />
            <div path="/logout" element={<Logout />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;
