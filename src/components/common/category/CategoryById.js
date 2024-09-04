import React from "react";
import logo from '../../../assets/logo/logo2.jpg';
import './CategoryById.css';

function CategoryById() {
  return (
    <div className="categoryById-section">
      <div className="grid-categoryById">
        <div className="categoryById-item">
          <img src={logo} alt='logo' width={50}/>
          <div className="categoryById-info">
            <h3>General Knowledge</h3>
            <p>Software Tester</p>
          </div>
          <i className="fa-solid fa-ellipsis-vertical options-icon"></i>
        </div>
        <div className="categoryById-item">
          <img src={logo} alt='logo' width={50}/>
          <div className="categoryById-info">
            <h3>General Knowledge</h3>
            <p>Software Tester</p>
          </div>
          <i className="fa-solid fa-ellipsis-vertical options-icon"></i>
        </div>
        <div className="categoryById-item">
          <img src={logo} alt='logo' width={50}/>
          <div className="categoryById-info">
            <h3>General Knowledge</h3>
            <p>Software Tester</p>
          </div>
          <i className="fa-solid fa-ellipsis-vertical options-icon"></i>
        </div>
        <div className="categoryById-item">
          <img src={logo} alt='logo' width={50}/>
          <div className="categoryById-info">
            <h3>General Knowledge</h3>
            <p>Software Tester</p>
          </div>
          <i className="fa-solid fa-ellipsis-vertical options-icon"></i>
        </div>
      </div>
    </div>
  )
}

export default CategoryById;