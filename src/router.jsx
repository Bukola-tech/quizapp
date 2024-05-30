

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
// import ProtectedRoute from './routes/ProtectedRoute';
import Userdashboard from './pages/particitant/userdashboard/Userdashboard';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import SignInAs from './pages/signInAs/SignInAs';
import SignUp from './pages/signUp/SignUp';
import CreateQuestion from './pages/admin/admindashboard/CreateQuestion';
import Login from './pages/login/Login';
import DashboardMain from './pages/admin/admindashboard/DashboardMain';
import Accounting from './questions/accounting/Accounting';
import BuinessAdmin from './questions/businessAdmin/BuinessAdmin';
import Marketing from './questions/marketing/Marketing'
import InformationTech from './questions/informationTech/InformationTech';
import Logistics from './questions/logicstics/Logicstics'
import Result from './pages/admin/admindashboard/Result';
import ProjectManagement from './questions/projectManagement/ProjectManagement';
import Loading from './components/loading/Loading';
import Admin from './pages/admin/admindashboard/Admin';
import SignInAdmin from './pages/signInAdmin/SignInAdmin';
import LogoutAdmin from './pages/admin/admindashboard/LogoutAdmin';
import AddUser from './pages/admin/admindashboard/AddUser';
import DeleteUser from './pages/admin/admindashboard/DeleteUser';
import Settings from './pages/admin/admindashboard/Settings';
import ViewUsers from './pages/admin/admindashboard/ViewUsers';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signInAs',
    element: <SignInAs />,
  },
  {
    path: '/signin',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
 
  {
    path: '/signinadmin',
    element: <SignInAdmin/>,
  },
  {
    path: '/accounting',
    element: <Accounting/>,
  },
  {
    path: '/buinessAdmin',
    element: <BuinessAdmin/>,
  },
  {
    path: '/infomationTech',
    element: <InformationTech/>,
  },
  {
    path: '/logistics',
    element: <Logistics/>,
  },
  {
    path: '/marketing',
    element: <Marketing/>,
  },
  {
    path: '/projectManagement',
    element: <ProjectManagement/>,
  },
  {
    path: '/userdashboard',
    element: <Userdashboard />,
    children: [
      {
        index: true,
        element: <MainLayout />,
      },
    ],
  },

  {
    path: '/admin',
    element: (
      // <ProtectedRoute>
        <DashboardMain/>
      // </ProtectedRoute>
    ),
    children:[
      {
        index: true,
        element: <Admin/>
      },
      {
        path: '/admin/createQuiz',
        element: <CreateQuestion />,
      },
      {
        path: '/admin/results',
        element: <Result/>,
      },
      {
        path : '/admin/addUser',
        element: <AddUser/>
      },
      {
        path: '/admin/viewusers',
        element: <ViewUsers/>
      },
      {
        path : '/admin/deleteUser',
        element: <DeleteUser/>
      },
      {
        path: "/admin/logout",
        element : <LogoutAdmin/>
      },
      {
        path: '/admin/settings',
        element: <Settings/>
      },

    ]
  },
  {
    path: '/loading',
    element: <Loading />,
  },
]);

export default router;
