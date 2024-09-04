import React from "react";
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo/logo2.jpg';
import './Category.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Category() {
  return (
    <div className="Category">
      <Header />
       <div className="category-section">        
          <div className="grid-category">        
            <Link className="category-item">
              <img src={logo} alt='logo' width={50}/>
              <div className="category-info">
                <h3>General Knowledge</h3>
                <p>Software Tester</p>
              </div>
              <i className="fa-solid fa-ellipsis-vertical options-icon"></i>
            </Link>
          </div>
        </div>
      <Footer />
    </div>
    
  )
}

export default Category;