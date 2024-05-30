import React from 'react';

const LogoutAdmin = () => {
  // Perform logout actions here, such as clearing authentication state, localStorage, etc.
  localStorage.removeItem('authToken'); // Example: Clearing authentication token from localStorage

  // Redirect to the login page after logout
  window.location.href = "/signinadmin";

  // We don't return anything here because the page will be redirected immediately
  return null;
};

export default LogoutAdmin;
