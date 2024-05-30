

import React from 'react';
import Boxlayout from './Boxlayout';
import Side from './Side'; // Import the Side component
import './Userdashboard.css'
import { Outlet } from 'react-router-dom/dist';

const Userdashboard = () => {
  return (
    <div className="app-container">
      <Side /> {/* Render the Side component */}
      <Boxlayout/>
    </div>
  );
};

export default Userdashboard;

