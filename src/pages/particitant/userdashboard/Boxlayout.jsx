import React from 'react';
import BoxGrid from './Box';
import { Link } from 'react-router-dom';

const Boxlayout = () => {
  // Define the array of boxes with color and text
  const boxes = [
    { color: '#5B1B5B', text: 'Project Management', to: "/projectManagement" },
    { color: '#FD3657', text: 'Information Technology', to: "/infomationTech" },
    { color: '#CA6B13', text: 'Buisness Administration', to:"/buinessAdmin" },
    { color: '#0B8084', text: 'Marketing', to:"/marketing" },
    { color: '#3667B2', text: 'Accounting', to:"/accounting" },
    { color: '#255E2F', text: 'Logistics', to:"/logistics" }
  ];

  return (
    <div>
      {/* Render the BoxGrid component and pass the boxes array as props */}
      
       <BoxGrid boxes={boxes} />
      
     
    </div>
  );
};

export default Boxlayout;
