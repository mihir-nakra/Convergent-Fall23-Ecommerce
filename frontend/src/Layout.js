import React from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;