import React from "react";
import logo from '../../../assets/logo/logo2.jpg';
import './Category.css';

function Category() {
  return (
    <div className="category-section">
      <div className="grid-category">
        <div className="category-item">
          <img src={logo} alt='logo' width={50}/>
          <div className="category-info">
            <h3>General Knowledge</h3>
            <p>Software Tester</p>
          </div>
          <i className="fa-solid fa-ellipsis-vertical options-icon"></i>
        </div>
        <div className="category-item">
          <img src={logo} alt='logo' width={50}/>
          <div className="category-info">
            <h3>General Knowledge</h3>
            <p>Software Tester</p>
          </div>
          <i className="fa-solid fa-ellipsis-vertical options-icon"></i>
        </div>
        <div className="category-item">
          <img src={logo} alt='logo' width={50}/>
          <div className="category-info">
            <h3>General Knowledge</h3>
            <p>Software Tester</p>
          </div>
          <i className="fa-solid fa-ellipsis-vertical options-icon"></i>
        </div>
        <div className="category-item">
          <img src={logo} alt='logo' width={50}/>
          <div className="category-info">
            <h3>General Knowledge</h3>
            <p>Software Tester</p>
          </div>
          <i className="fa-solid fa-ellipsis-vertical options-icon"></i>
        </div>
      </div>
    </div>
  )
}

export default Category;