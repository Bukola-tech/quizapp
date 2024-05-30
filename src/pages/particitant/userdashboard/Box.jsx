import React from 'react';
import { Link } from 'react-router-dom';

const Box = ({ color, text , to}) => (
  <Link to={to}>
    <div style={{ backgroundColor: color,padding: '20px', margin: '10px', marginTop: '90px',marginRight: '50px',textAlign: 'center', height: '40%', borderRadius: '15px',width: '190px' }}>
      <div style={{ fontSize: '16px',  color: 'white', marginTop: '25px', maxWidth: '120px',marginLeft: '30px'  }}>
          {text}
      </div>
    </div>
  </Link>

);

const BoxGrid = ({ boxes }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', }}>
      {boxes.map((box, index) => (
        <Box key={index} color={box.color} text={box.text} to={box.to} />
      ))}
    </div>
  );
};

export default BoxGrid;
