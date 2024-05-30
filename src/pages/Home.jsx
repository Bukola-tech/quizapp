import React from 'react';
import Header from '../components/navigation/topnav/Header';
import img from '../assets/home.png';
import styles from './css/styles.module.css'; 
import { Link } from 'react-router-dom'; // Correct import for Link
import { Outlet } from 'react-router-dom/dist';

const Home = () => {
  return (
    <div>
      <Header />
      
      {/* Centered content */}
      <div className={styles.centeredContent}>
        <h2>Welcome to your professional examination dashboard where you can manage, administer, or conduct assessments with ease.</h2>
        {/* Corrected Link component usage */}
        <Link to="signInAs"><button className={styles.let}>Let's do it</button></Link>
      </div>

      {/* Image aligned to the left */}
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          loading="lazy"
          alt="Professional Examination Dashboard"
          src={img}
        />
      </div>
      <Outlet/>
    </div>
  );
};

export default Home;
