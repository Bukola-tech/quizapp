// AddUser.jsx
import React from 'react';
import styles from './css/addUser.module.css';

const AddUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement add user functionality here
  };

  return (
    <div className={styles.addUser}>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit} className={styles.addUserForm}>
        {/* Add user form or content */}
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" className={styles.addButton}>Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
