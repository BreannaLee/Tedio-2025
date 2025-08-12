import React from 'react';

const QuickActionHeader = () => {
  const handleNavigation = (page) => {
    // In a real app, you'd use React Router for navigation
    console.log(`Navigating to ${page}`);
    // You can implement actual navigation logic here
  };

  return (
    <header style={{
      backgroundColor: '#f5f7fb',
      borderBottom: '1px solid #e2e8f0',
      padding: '16px 24px',
      marginBottom: '24px'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Left side - Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <img 
            src="Tedio-Logo.png" 
            alt="Tedio Logo" 
            style={{
              height: '40px',
              width: 'auto'
            }}
          />
        </div>

        {/* Right side - Navigation */}
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          gap: '32px',
          alignItems: 'center'
        }}>
          <li>
            <button
              onClick={() => handleNavigation('dashboard')}
              style={{
                background: 'none',
                border: 'none',
                color: '#475569',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                padding: '8px 12px',
                borderRadius: '6px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e2e8f0';
                e.target.style.color = '#0d9488';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#475569';
              }}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('relevancy')}
              style={{
                background: 'none',
                border: 'none',
                color: '#475569',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                padding: '8px 12px',
                borderRadius: '6px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e2e8f0';
                e.target.style.color = '#0d9488';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#475569';
              }}
            >
              Relevancy
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('quick-actions')}
              style={{
                background: 'none',
                border: 'none',
                color: '#0d9488',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                padding: '8px 12px',
                borderRadius: '6px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e2e8f0';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              Quick Actions
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('settings')}
              style={{
                background: 'none',
                border: 'none',
                color: '#475569',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                padding: '8px 12px',
                borderRadius: '6px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e2e8f0';
                e.target.style.color = '#0d9488';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#475569';
              }}
            >
              Settings
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default QuickActionHeader;
