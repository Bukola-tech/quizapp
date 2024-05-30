import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'; 
const Sidebar = ({ menuItems }) => {
  return (
    <div className="sidebar">
      <div className='labelmenu'>MENU</div>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>
              <span className="icon">{item.icon}</span>
              <span className="text">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
