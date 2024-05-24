import React from 'react';
import info from '../imgs/info.png'
import '../style/nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <p style={{position:"absolute",left:0,top:0, color:"white"}}>Copyright © 2024/5 Eric Chen</p>
        <img src={info} alt="info" className="ml-auto"/>
    </nav>
  );
};

export default Navbar;
