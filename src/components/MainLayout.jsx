// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Header from '../components/navigation/topnav/Header'

// const MainLayout = () => {

//   return (
//     <div>
//       <Header />
//       <div style={contentStyle}>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default MainLayout;


import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/navigation/topnav/Header';

const MainLayout = () => {
  // Define contentStyle as an inline style object
  const contentStyle = {
    padding: '20px',           // Example: Set padding to 20px
    backgroundColor: 'white',  // Example: Set background color to white
    borderRadius: '8px',       // Example: Set border radius to 8px
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' // Example: Set box shadow
  };

  return (
    <div>
      {/* Apply contentStyle as inline style to the div */}
      <div style={contentStyle}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
