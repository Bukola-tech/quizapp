import React from 'react';
import styles from './css/firstpage.module.css';

const Firstpage = ({ adminEmail }) => {
    return (
        <div className={styles.first}>
            <div className={styles.second}>
                <h2>Welcome, {adminEmail}</h2>
            </div>
        </div>
    );
};

export default Firstpage;
