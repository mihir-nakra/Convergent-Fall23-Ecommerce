import React, { useState } from 'react';

function App() {
  const containerStyle = {
    display: 'flex',
    height: '100vh',
  };

  const gradientStyle = {
    flex: 1,
    backgroundImage: 'linear-gradient(to bottom, white, lightgreen)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const loginContainerStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '20px',
  };

  const formStyle = {
    width: '300px',
    transition: 'opacity 0.3s ease-in-out',
  };

  const titleStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  const optionStyle = {
    marginRight: '20px',
    cursor: 'pointer',
    opacity: 0.5,
    transition: 'opacity 0.3s ease-in-out',
  };

  const [selectedOption, setSelectedOption] = useState('startup');

  const switchToStartup = () => {
    setSelectedOption('startup');
  };

  const switchToInvestor = () => {
    setSelectedOption('investor');
  };

  return (
    <div style={containerStyle}>
      <div style={gradientStyle}>
        {/* Content for the left side (gradient) goes here */}
        <h1>Website</h1>
      </div>
      <div style={loginContainerStyle}>
        {/* Content for the right side (login) goes here */}
        <div style={formStyle}>
          <h2 style={titleStyle}>Create your account</h2>
          <div style={{ display: 'flex' }}>
            <div
              style={{ ...optionStyle, opacity: selectedOption === 'startup' ? 1 : 0.5 }}
              onClick={switchToStartup}
            >
              Startup
            </div>
            <div
              style={{ ...optionStyle, opacity: selectedOption === 'investor' ? 1 : 0.5 }}
              onClick={switchToInvestor}
            >
              Investor
            </div>
          </div>
          <form>
            <div style={{ opacity: selectedOption === 'startup' ? 1 : 0 }}>
              <label>
                Startup Name:
                <input type="text" name="startupName" style={{ width: '100%' }} />
              </label>
            </div>
            <div style={{ opacity: selectedOption === 'investor' ? 1 : 0 }}>
              <label>
                Investor Name:
                <input type="text" name="investorName" style={{ width: '100%' }} />
              </label>
            </div>
            <div>
              <label>
                Email:
                <input type="email" name="email" style={{ width: '100%' }} />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input type="password" name="password" style={{ width: '100%' }} />
              </label>
            </div>
            <div>
              <label>
                Confirm Password:
                <input type="password" name="confirmPassword" style={{ width: '100%' }} />
              </label>
            </div>
            <button type="submit" style={{ width: '100%', marginTop: '10px' }}>
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
