import React from 'react';
import '../Styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="left-sidebar"></div>
      <div className="main-dashboard">
        <div className="top-bar">
          <h1>home</h1>
        </div>
        <div className="content-container"></div>
      </div>
    </div>
  );
};

export default Dashboard;
