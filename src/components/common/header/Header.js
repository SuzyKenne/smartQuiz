import React from 'react';
import { Link } from 'react-router-dom';
import '../header/Header.css';
import logo from '../../../assets/logo/logo1.png';


function Header() {
  return (
    <div className="header">
      <div className='container'>
        <div className='logo'>
          <img src={logo} alt='logo'width={50}/>
          <h2>SmartQuiz</h2>
        </div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/categories'>Categories</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
          </ul>
        </nav>       
      </div>
    </div>
  );
}

export default Header;
