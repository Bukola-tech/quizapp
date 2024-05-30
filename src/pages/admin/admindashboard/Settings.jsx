// Settings.jsx
import React from 'react';
import styles from './css/settings.module.css';

const Settings = () => {
  return (
    <div className={styles.settings}>
      <h2>Settings</h2>
      <div className={styles.settingsContent}>
        {/* Settings options or content */}
        <div className={styles.settingItem}>
          <label htmlFor="theme">Theme:</label>
          <select id="theme">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className={styles.settingItem}>
          <label htmlFor="language">Language:</label>
          <select id="language">
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </select>
        </div>
        {/* Add more settings options as needed */}
      </div>
    </div>
  );
};

export default Settings;
