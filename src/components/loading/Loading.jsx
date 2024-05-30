import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './loading.css'

const Loading = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    
    tl.to('.loading-circle', { duration: 0.6, scale: 0.8 })
      .to('.loading-circle', { duration: 0.6, scale: 1 });
    
    return () => {
      tl.kill(); 
    };
  }, []);

  return (
    <div className="loading">
      <svg className="loading-circle" viewBox="0 0 100 100"> 
        <circle cx="30" cy="30" r="10" fill="none" strokeWidth="8" stroke="#007bff"></circle>
      </svg>
    </div>
  );
};

export default Loading;
