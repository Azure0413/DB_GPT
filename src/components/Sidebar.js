import React from 'react';
import '../style/sidebar.css';
import logo from '../imgs/logos.png'
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const isConnect = location.pathname === '/connect';
  const isChat = location.pathname === '/chat';
  const isAbout = location.pathname === '/about';

  return (
    <div className="sidebar">
      <Link to="/connect" className="aa">
        {isConnect 
          ? <div className='dbc'>Database Connection</div>
          : <div>Database Connection</div>}
      </Link>
      <Link to="/chat" className="aa">
      {isChat
          ? <div className='chat'>Chatbot</div>
          : <div>Chatbot</div>}
        
      </Link>
      <Link to="/about" className="aa">
      {isAbout
          ? <div className='about'>About & Contact</div>
          : <div>About & Contact</div>}
        
      </Link>
      <div>
        <img src={logo} alt="logo" className='logos'/>
      </div>
    </div>
  );
};

export default Sidebar;