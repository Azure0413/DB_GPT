import React, { useState } from 'react';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import list from '../imgs/list.png';
import '../style/connect.css'
import { Link } from 'react-router-dom';

const Connect = () => {
  const [formData, setFormData] = useState({
    dbType: '',
    hostname: '',
    port: '',
    username: '',
    password: '',
    database: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <div className="d-flex justify-content-end">
          <Navbar />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ width: '100%' }}>
          <form onSubmit={handleSubmit} style={{ width: '70%' }}>
            <h3 style={{paddingBottom:"20px",fontWeight:"bold"}}>GenDB- Database Configuration</h3>
            <div className="form-group">
              <label htmlFor="dbType" style={{ fontWeight: 'bold' }}>Choose a Database Management System</label>
              <select
                id="dbType"
                name="dbType"
                className="form-control"
                value={formData.dbType}
                onChange={handleChange}
                style={{backgroundColor:"#F0F4F6"}}
              >
                <option value="MySQL Database">Oracle Database</option>
                <option value="PostgreSQL">MySQL Database</option>
                <option value="SQLite">Microsoft SQL Server</option>
                <option value="Oracle">Postgre SQL Database</option>
                <option value="Oracle">MongoDB</option>
              </select>
              <img src={list} style={{position:"absolute",top:"155px",right:"200px",width:"1%"}}/>
            </div>
            <div className="form-group">
              <label htmlFor="hostname"  style={{ fontWeight: 'bold', paddingTop:"10px" }}>Hostname</label>
              <input
                type="text"
                id="hostname"
                name="hostname"
                className="form-control"
                value={formData.hostname}
                onChange={handleChange}
                style={{backgroundColor:"#F0F4F6"}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="port" style={{ fontWeight: 'bold', paddingTop:"10px" }}>Port</label>
              <input
                type="text"
                id="port"
                name="port"
                className="form-control"
                value={formData.port}
                onChange={handleChange}
                style={{backgroundColor:"#F0F4F6"}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username" style={{ fontWeight: 'bold', paddingTop:"10px" }}>Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                value={formData.username}
                onChange={handleChange}
                style={{backgroundColor:"#F0F4F6"}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" style={{ fontWeight: 'bold', paddingTop:"10px" }}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                style={{backgroundColor:"#F0F4F6"}}
              />
            </div>
            <div className="form-group" style={{paddingBottom:"30px"}}>
              <label htmlFor="database" style={{ fontWeight: 'bold', paddingTop:"10px" }}>Database</label>
              <input
                type="text"
                id="database"
                name="database"
                className="form-control"
                value={formData.database}
                onChange={handleChange}
                style={{backgroundColor:"#F0F4F6"}}
              />
            </div>
            <Link to="/chat" className="btnc">
            Submit
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
