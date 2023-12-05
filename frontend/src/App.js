import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider, BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage"; // Component for the homepage
import ApplicationStartup from './Application_Startup_Page/ApplicationStartup';

// import theme from "./Theme"; // Custom theme settings
import ApplicationInvestor from './Application_Startup_Page/ApplicationInvestor.js';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard.js';


function App() {
  const router = createBrowserRouter(
    [
      {path: "/", element: <Dashboard />},
      {path: "/startup-app", element: <ApplicationStartup />},
      {path: "/investor-app", element: <ApplicationInvestor />},
      // {path: "/dashboard", element: <Dashboard />}
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
