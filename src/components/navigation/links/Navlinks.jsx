import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ to, label, icon }) => {
  return (
    <NavLink to={to} activeClassName="active" className="link">
      <div>
        <span>{icon}</span>
        <span>{label}</span>
      </div>
    </NavLink>
  );
};

export default NavLinks;
