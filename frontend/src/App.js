import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AuthProvider } from "./AuthContext"; // Custom context for authentication
import HomePage from "./HomePage"; // Component for the homepage
import LoginPage from "./LoginPage"; // Component for the login page
import { CssBaseline } from "@mui/material"; // For consistent baseline styling
// import theme from "./Theme"; // Custom theme settings

function App() {
  const createAccountStyle = {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  };

  const divStyle = {
    backgroundColor: '#ffffff',
    height: '1024px',
    position: 'relative',
    width: '1440px',
  };

  const rectangleStyle = {
    background: 'linear-gradient(180deg, rgba(158, 193, 163, 0) 0%, rgb(158, 193, 163) 72.92%)',
    height: '1024px',
    left: '0',
    position: 'absolute',
    top: '0',
    width: '720px',
  };

  const overlapGroupWrapperStyle = {
    height: '60px',
    left: '850px',
    position: 'absolute',
    top: '733px',
    width: '477px',
  };

  const overlapGroupStyle = {
    backgroundColor: '#9ec1a3',
    borderRadius: '40px',
    height: '60px',
    position: 'relative',
    width: '475px',
  };

  const textWrapperStyle = {
    color: '#ffffff',
    fontFamily: 'Libre Franklin-Bold, Helvetica',
    fontSize: '22px',
    fontWeight: '700',
    height: '29px',
    left: '116px',
    letterSpacing: '0',
    lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    top: '15px',
    width: '243px',
  };

  const confirmPasswordStyle = {
    height: '88px',
    left: '1100px',
    position: 'absolute',
    top: '607px',
    width: '227px',
  };

  const rectangle2Style = {
    backgroundColor: '#ffffff',
    border: '1px solid',
    borderColor: '#a3a3a3',
    borderRadius: '10px',
    height: '60px',
    left: '0',
    position: 'absolute',
    top: '28px',
    width: '225px',
  };

  const textWrapper2Style = {
    color: '#000000',
    fontFamily: 'Libre Franklin-Regular, Helvetica',
    fontSize: '18px',
    fontWeight: '400',
    left: '0',
    letterSpacing: '0',
    lineHeight: 'normal',
    position: 'absolute',
    top: '0',
  };

  const passwordStyle = {
    height: '88px',
    left: '850px',
    position: 'absolute',
    top: '607px',
    width: '227px',
  };

  const companyNameStyle = {
    height: '88px',
    left: '850px',
    position: 'absolute',
    top: '489px',
    width: '477px',
  };

  const rectangle3Style = {
    backgroundColor: '#ffffff',
    border: '1px solid',
    borderColor: '#a3a3a3',
    borderRadius: '10px',
    height: '60px',
    left: '0',
    position: 'absolute',
    top: '28px',
    width: '475px',
  };

  const emailStyle = {
    height: '88px',
    left: '850px',
    position: 'absolute',
    top: '371px',
    width: '477px',
  };

  const textWrapper3Style = {
    color: '#000000',
    fontFamily: 'Libre Franklin-Bold, Helvetica',
    fontSize: '50px',
    fontWeight: '700',
    left: '845px',
    letterSpacing: '0',
    lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    top: '189px',
  };

  const alreadyHaveAnStyle = {
    color: '#000000',
    fontFamily: 'Libre Franklin-Regular, Helvetica',
    fontSize: '18px',
    fontWeight: '400',
    height: '22px',
    left: '951px',
    letterSpacing: '0',
    lineHeight: 'normal',
    position: 'absolute',
    top: '812px',
  };

  const spanStyle = {
    color: '#000000',
    fontFamily: 'Libre Franklin-Regular, Helvetica',
    fontSize: '18px',
    fontWeight: '400',
    letterSpacing: '0',
  };

  const textWrapper4Style = {
    fontFamily: 'Libre Franklin-SemiBold, Helvetica',
    fontWeight: '600',
  };

  const startupInvestorStyle = {
    height: '43px',
    left: '850px',
    position: 'absolute',
    top: '297px',
    width: '479px',
  };

  const lineStyle = {
    height: '2px',
    left: '0',
    position: 'absolute',
    top: '41px',
    width: '475px',
  };

  const textWrapper5Style = {
    color: '#000000',
    fontFamily: 'Libre Franklin-Regular, Helvetica',
    fontSize: '23px',
    fontWeight: '400',
    left: '69px',
    letterSpacing: '0',
    lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    top: '6px',
  };

  const textWrapper6Style = {
    color: '#a3a3a3',
    fontFamily: 'Libre Franklin-Regular, Helvetica',
    fontSize: '23px',
    fontWeight: '400',
    left: '312px',
    letterSpacing: '0',
    lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    top: '0',
  };

  const [selectedOption, setSelectedOption] = useState('startup');

  const switchToStartup = () => {
    setSelectedOption('startup');
  };

  const switchToInvestor = () => {
    setSelectedOption('investor');
  };

  return (
    <div style={createAccountStyle} className="create-account">
      <div style={divStyle} className="div">
        <div style={rectangleStyle} className="rectangle" />
        <div style={overlapGroupWrapperStyle} className="overlap-group-wrapper">
          <div style={overlapGroupStyle} className="overlap-group">
            <div style={textWrapperStyle} className="text-wrapper">
              Create your account
            </div>
          </div>
        </div>
        <div style={confirmPasswordStyle} className="confirm-password">
          <div style={rectangle2Style} className="rectangle-2">
            <div style={textWrapper2Style} className="text-wrapper-2">
              Confirm Password
            </div>
          </div>
        </div>
        <div style={passwordStyle} className="password">
          <div style={rectangle2Style} className="rectangle-2">
            <div style={textWrapper2Style} className="text-wrapper-2">
              Password
            </div>
          </div>
        </div>
        <div style={companyNameStyle} className="company-name">
          <div style={rectangle3Style} className="rectangle-3">
            <div style={textWrapper2Style} className="text-wrapper-2">
              Company Name
            </div>
          </div>
        </div>
        <div style={emailStyle} className="email">
          <div style={rectangle3Style} className="rectangle-3">
            <div style={textWrapper2Style} className="text-wrapper-2">
              Email
            </div>
          </div>
        </div>
        <div style={textWrapper3Style} className="text-wrapper-3">
          Create Your Account
        </div>
        <div style={alreadyHaveAnStyle} className="already-have-an">
          <span style={spanStyle}>Already have an account? </span>
          <span className="text-wrapper-4">Login</span>
        </div>
        <div style={startupInvestorStyle} className="startup-investor">
          <div style={lineStyle} className="line" />
          <div style={textWrapper5Style} className="text-wrapper-5">
            Startup
          </div>
          <div style={textWrapper6Style} className="text-wrapper-6">
            Investor
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
