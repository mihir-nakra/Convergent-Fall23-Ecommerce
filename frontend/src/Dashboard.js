import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Layout from "./Layout";
import Page1 from "./Page1";
import Page2 from "./Page2";

export default function Dashboard() {
    return (
        <Layout>
        <Routes>
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          {/* Add more routes for additional pages */}
        </Routes>
      </Layout>
    );
}
