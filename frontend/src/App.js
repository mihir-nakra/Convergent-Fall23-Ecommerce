import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AuthProvider } from "./AuthContext"; // Custom context for authentication
import HomePage from "./HomePage"; // Component for the homepage
import LoginPage from "./LoginPage"; // Component for the login page
import { CssBaseline } from "@mui/material"; // For consistent baseline styling
import ApplicationStartup from './Application_Startup_Page/ApplicationStartup'
// import theme from "./Theme"; // Custom theme settings
import LoginPageStyling from './LoginPageStyling';
import Hello from './Application_Startup_Page/Hello';

function App() {
  const router = createBrowserRouter(
    [
      {path: "/", element: <LoginPageStyling></LoginPageStyling>},
      {path: "/ApplicationStartup", element: <Hello />}
    ]
  );
  return (
    <RouterProvider router = {router} />
  )
}

export default App;
