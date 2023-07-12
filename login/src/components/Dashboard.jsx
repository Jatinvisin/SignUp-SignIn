import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/product">Product</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/setting">Settings</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Welcome to the Dashboard!</h1>
        
      </div>
    </div>
  );
};

export default Dashboard;
