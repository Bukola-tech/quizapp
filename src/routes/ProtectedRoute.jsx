import { useContext } from 'react'
import {useAuth} from './AuthContext';

const ProtectedRoute = ({children}) =>{
  const {userRole} = useAuth();

  return userRole === 'admin' ? children : null;
};

export default ProtectedRoute