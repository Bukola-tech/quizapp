// UserContext.js
import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const updateUser = (newUsers) => {
    setUsers(newUsers);
  };

  return (
    <UserContext.Provider value={{ users, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserData = () => React.useContext(UserContext);
