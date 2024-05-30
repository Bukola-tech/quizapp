
import { UserProvider } from './context/UserContext'
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import {AuthProvider} from './routes/AuthContext'
import router from './router.jsx';


const App = () => {
  return (
    <div>
      <UserProvider>
        <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
      </UserProvider>
    </div>
  );
};

export default App;


