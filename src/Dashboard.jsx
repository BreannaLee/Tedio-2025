import React from 'react';
import './dashboard.css';

const Dashboard = () => {
  const handleTileClick = (page) => {
    // In a real app, you'd use React Router for navigation
    console.log(`Navigating to ${page}`);
    // For now, we'll just log the navigation
    // You can implement actual navigation logic here
  };

  return (
    <>
      <header>
        <nav>
          <div>
            <img src="Tedio-Logo.png" alt="Logo" />
          </div>
          <ul>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#analytics">Analytics</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#help">Help</a></li>
          </ul>
        </nav>
      </header>
      <div className="heading">Welcome to Your Dashboard</div>
      <div className="text">Choose an option below to get started:</div>
      <div className="tiles-container">
        <div className="tile" onClick={() => handleTileClick('profile')}>
          <div className="tile-title">Profile</div>
          <div className="tile-desc">View and edit your profile</div>
        </div>
        <div className="tile" onClick={() => handleTileClick('analytics')}>
          <div className="tile-title">Analytics</div>
          <div className="tile-desc">See your data insights</div>
        </div>
        <div className="tile" onClick={() => handleTileClick('settings')}>
          <div className="tile-title">Settings</div>
          <div className="tile-desc">Manage your preferences</div>
        </div>
        <div className="tile" onClick={() => handleTileClick('help')}>
          <div className="tile-title">Help</div>
          <div className="tile-desc">Get support and resources</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
