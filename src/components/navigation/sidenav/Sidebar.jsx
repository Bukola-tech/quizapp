// Sidebar.jsx
import React from "react";
import NavLinks from "../links/Navlinks";
import style from "./sidebar.module.css";
import { FaUser, FaHome, FaUserPlus, FaUserMinus, FaCog } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { MdQuestionAnswer } from "react-icons/md";

const Sidebar = () => {
  return (
    <div id={style.sidewrapper}>
      <div id={style.gold}>
        <div id={style.links}>
          <NavLinks to="/" icon={<FaHome />} label="Home" />
          <NavLinks to="/admin" icon={<FaUser />} label="Profile" />
          <NavLinks to="/admin/createQuiz" icon={<MdQuiz />} label="Create Quiz" />
          <NavLinks to="/admin/results" icon={<MdQuestionAnswer />} label="Records" />
          <NavLinks to="/admin/addUser" icon={<FaUserPlus />} label="Add User" />
          <NavLinks to="/admin/deleteUser" icon={<FaUserMinus />} label="Delete User" />
          <NavLinks to="/admin/settings" icon={<FaCog />} label="Settings" />
          <NavLinks to="/admin/viewusers" icon={<FaUser />} label="View Users" />
          <NavLinks to="/admin/logout" label="Logout" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
