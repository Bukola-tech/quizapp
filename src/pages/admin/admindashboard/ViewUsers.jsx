// ViewUsers.jsx
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './css/viewuser.module.css';

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to('.loading-circle', { duration: 0.6, scale: 0.8 }).to('.loading-circle', { duration: 0.6, scale: 1 });

    fetch('https://questionsapi.onrender.com/auth/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching users:', error));

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className={styles.viewUsers}>
      <h2>View Users</h2>
      {loading ? (
        <div className={styles.loading}>
          <svg className={`${styles.loadingCircle} loading-circle`} viewBox="0 0 100 100">
            <circle cx="30" cy="30" r="10" fill="none" strokeWidth="8" stroke="#007bff"></circle>
          </svg>
        </div>
      ) : (
        <table className={styles.userTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewUsers;
