import React from 'react';
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
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#categories'>Categories</a></li>
            <li><a href='#blog'>Blog</a></li>
          </ul>
        </nav>       
      </div>
    </div>
  );
}

export default Header;
