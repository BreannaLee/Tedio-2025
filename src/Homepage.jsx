import React from 'react';
import './homepage.css';

const Homepage = () => {
  const handleGetStarted = () => {
    // In a real app, you'd use React Router for navigation
    console.log('Navigating to signup page');
    // You can implement actual navigation logic here
  };

  return (
    <>
      <div className="heading">
        <p>Welcome to Tedio</p>
      </div>
      <div className="text">
        <p>Gain insights into your child's online behavior and foster 
          healthy digital habits. Tedio helps you understand your 
          child's digital world, providing emotional support
          and valuable insights.
        </p>
      </div>
      <button onClick={handleGetStarted}>Get started</button>
    </>
  );
};

export default Homepage;
