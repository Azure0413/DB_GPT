import React, { useState } from 'react';
import logo from '../imgs/logo.png';
import '../style/main.css';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import { Link } from 'react-router-dom';

const MainContent = () => {
  const [showConnect, setShowConnect] = useState(false); // 添加状态管理

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <div className="d-flex justify-content-end">
          <Navbar />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '65vh', width: '100%' }}>
          <div className="d-flex align-items-center mb-5">
            <img src={logo} alt="logo" className="mr-3" />
            <h1 style={{ color: "#7BA2C5", fontWeight: "bold" }}>GENDB CAECE 2024</h1>
          </div>
          <div className="d-flex" style={{ paddingLeft: "20px",paddingTop:"20px"}}>
            <button style={{border:"none", background:"none"}}><Link to="/connect" className="btn-custom">Database Connection</Link></button>
            <p style={{ paddingLeft: "40px" }}></p>
            <button style={{border:"none", background:"none"}}><Link to="/erm" className="btn-custom">Generate ER Diagram</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
