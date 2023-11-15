import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { AuthProvider } from "./contexts/AuthContext";
// import HomePage from "./components/HomePage";
// import LoginPage from "./components/LoginPage";
import { CssBaseline } from "@mui/material";
// import theme from "../t/Theme";

function AppStartupStyle() {
  const createAccountStyle = {
    backgroundColor: '#63948d',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  };

  const overlapWrapperStyle = {
    backgroundColor: '#63948d',
    height: '1024px',
    width: '1440px',
  };

  const overlapStyle = {
    backgroundColor: '#f5f5f5',
    borderRadius: '25px',
    boxShadow: '0px 4px 4px #00000040',
    height: '768px',
    left: '149px',
    position: 'relative',
    top: '128px',
    width: '1142px',
  };

  const confirmPasswordStyle = {
    height: '88px',
    left: '334px',
    position: 'absolute',
    top: '388px',
    width: '227px',
  };

  const rectangleStyle = {
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

  const textWrapperStyle = {
    color: '#000000',
    fontFamily: '"Libre Franklin-Regular", Helvetica',
    fontSize: '18px',
    fontWeight: '400',
    left: '0',
    letterSpacing: '0',
    lineHeight: 'normal',
    position: 'absolute',
    top: '0',
  };

  const divStyle = {
    height: '88px',
    left: '84px',
    position: 'absolute',
    top: '270px',
    width: '227px',
  };

  const confirmPass2Style = {
    height: '88px',
    left: '334px',
    position: 'absolute',
    top: '270px',
    width: '227px',
  };

  // Define other styles similarly

  return (
    <div className="application-startup" style={createAccountStyle}>
      <div className="overlap-wrapper" style={overlapWrapperStyle}>
        <div className="overlap" style={overlapStyle}>
          <div className="confirm-password" style={confirmPasswordStyle}>
            <div className="rectangle" style={rectangleStyle}></div>
            <div className="text-wrapper" style={textWrapperStyle}>Text Here</div>
          </div>
          <div className="div" style={divStyle}></div>
          <div className="confirm-password-2" style={confirmPass2Style}></div>
          <div className="confirm-password-3" style={confirmPasswordStyle}></div>
          <div className="text-wrapper-2" style={textWrapperStyle}>Text Here</div>
          <div className="confirm-password-4" style={confirmPass2Style}></div>
          <div className="confirm-password-5" style={confirmPasswordStyle}></div>
          <div className="password" style={confirmPass2Style}></div>
          <div className="company-name" style={confirmPasswordStyle}></div>
          <div className="rectangle-2" style={rectangleStyle}></div>
          <div className="company-name-2" style={confirmPass2Style}></div>
          <div className="company-name-3" style={confirmPasswordStyle}></div>
          <div className="company-name-4" style={confirmPass2Style}></div>
          <div className="text-wrapper-3" style={textWrapperStyle}>Text Here</div>
          <div className="create-account" style={confirmPasswordStyle}>
            <div className="overlap-group" style={createAccountStyle}>
              <div className="text-wrapper-4">Text Here</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppStartupStyle;
