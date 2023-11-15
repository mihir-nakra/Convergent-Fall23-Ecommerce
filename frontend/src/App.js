import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider, BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AuthProvider } from "./AuthContext"; // Custom context for authentication
import HomePage from "./HomePage"; // Component for the homepage
import LoginPage from "./LoginPage"; // Component for the login page
import { CssBaseline } from "@mui/material"; // For consistent baseline styling
import ApplicationStartup from './Application_Startup_Page/ApplicationStartup';
import AppStartupStyle from './Application_Startup_Page/AppStartupStyle.js'

// import theme from "./Theme"; // Custom theme settings
import LoginPageStyling from './LoginPageStyling';
import Hello from './Application_Startup_Page/Hello';
import ApplicationInvestor from './Application_Startup_Page/ApplicationInvestor.js';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard.js';


function App() {
  const router = createBrowserRouter(
    [
      {path: "/", element: <HomePage />},
      {path: "/startup-app", element: <ApplicationStartup />},
      {path: "/investor-app", element: <ApplicationInvestor />},
      {path: "/dashboard", element: <Dashboard />}
    ]
  );
  return (
    <RouterProvider router = {router} />
  )
  return <BrowserRouter>
    <Sidebar>

<Menu
    menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
      },
    }}
  >
    <MenuItem component={<Link to="/documentation" />}> Documentation</MenuItem>
    <MenuItem component={<Link to="/calendar" />}> Calendar</MenuItem>
    <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem>
  </Menu>
  </Sidebar>
  </BrowserRouter>
}

export default App;
