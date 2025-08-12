import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Homepage from './Homepage';
import Signup from './Signup';
import Upload from './Upload';
import PauseAndPredict from './quick-actions/PauseAndPredict';
import YouTubeTimer from './quick-actions/YouTubeTimer';
import TimeTogether from './quick-actions/TimeTogether';
import WaitingTimeKit from './quick-actions/WaitingTimeKit';
import RemoveShorts from './quick-actions/RemoveShorts';
import ActualTimer from './quick-actions/ActualTimer';
import BuildWatchlist from './quick-actions/BuildWatchlist';
import Downtime from './quick-actions/Downtime';
import RemoveDevices from './quick-actions/RemoveDevices';
import BlockChannel from './quick-actions/BlockChannel';
import './quick-actions/qa.css';

function App() {
  const [currentPage, setCurrentPage] = useState('homepage');
  const [currentQuickAction, setCurrentQuickAction] = useState('PauseAndPredict');

  const mainPages = {
    'homepage': Homepage,
    'dashboard': Dashboard,
    'signup': Signup,
    'upload': Upload
  };

  const quickActions = {
    'PauseAndPredict': PauseAndPredict,
    'YouTubeTimer': YouTubeTimer,
    'TimeTogether': TimeTogether,
    'WaitingTimeKit': WaitingTimeKit,
    'RemoveShorts': RemoveShorts,
    'ActualTimer': ActualTimer,
    'BuildWatchlist': BuildWatchlist,
    'Downtime': Downtime,
    'RemoveDevices': RemoveDevices,
    'BlockChannel': BlockChannel
  };

  const CurrentMainPage = mainPages[currentPage];
  const CurrentQuickAction = quickActions[currentQuickAction];

  const renderContent = () => {
    if (currentPage === 'dashboard') {
      return (
        <>
          <CurrentMainPage />
          <div style={{ marginTop: '40px', borderTop: '2px solid #e2e8f0', paddingTop: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Quick Actions</h2>
            <nav style={{ 
              padding: '20px', 
              backgroundColor: '#f5f7fb', 
              borderRadius: '8px',
              marginBottom: '20px'
            }}>
              <select 
                value={currentQuickAction} 
                onChange={(e) => setCurrentQuickAction(e.target.value)}
                style={{
                  padding: '10px',
                  fontSize: '16px',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  backgroundColor: 'white',
                  width: '100%',
                  maxWidth: '300px'
                }}
              >
                <option value="PauseAndPredict">Pause and Predict</option>
                <option value="YouTubeTimer">YouTube Timer</option>
                <option value="TimeTogether">Time Together</option>
                <option value="WaitingTimeKit">Waiting Time Kit</option>
                <option value="RemoveShorts">Remove Shorts</option>
                <option value="ActualTimer">Actual Timer</option>
                <option value="BuildWatchlist">Build a Watchlist</option>
                <option value="Downtime">Schedule Downtime</option>
                <option value="RemoveDevices">Remove Devices from Bedroom</option>
                <option value="BlockChannel">Block a Channel</option>
              </select>
            </nav>
            <CurrentQuickAction />
          </div>
        </>
      );
    }
    
    return <CurrentMainPage />;
  };

  return (
    <div className="App">
      {/* Main Navigation */}
      <nav style={{ 
        padding: '20px', 
        backgroundColor: '#f5f7fb', 
        borderBottom: '1px solid #e2e8f0',
        marginBottom: '20px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0d9488' }}>
            Tedio 2025
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <button 
              onClick={() => setCurrentPage('homepage')}
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '6px',
                backgroundColor: currentPage === 'homepage' ? '#0d9488' : '#e2e8f0',
                color: currentPage === 'homepage' ? 'white' : '#475569',
                cursor: 'pointer'
              }}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('dashboard')}
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '6px',
                backgroundColor: currentPage === 'dashboard' ? '#0d9488' : '#e2e8f0',
                color: currentPage === 'dashboard' ? 'white' : '#475569',
                cursor: 'pointer'
              }}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setCurrentPage('signup')}
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '6px',
                backgroundColor: currentPage === 'signup' ? '#0d9488' : '#e2e8f0',
                color: currentPage === 'signup' ? 'white' : '#475569',
                cursor: 'pointer'
              }}
            >
              Sign Up
            </button>
            <button 
              onClick={() => setCurrentPage('upload')}
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '6px',
                backgroundColor: currentPage === 'upload' ? '#0d9488' : '#e2e8f0',
                color: currentPage === 'upload' ? 'white' : '#475569',
                cursor: 'pointer'
              }}
            >
              Upload
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {renderContent()}
    </div>
  );
}

export default App;
