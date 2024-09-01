import React from "react";
import './Result.css';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";


function Result() {
  return (
    <div className="Result">
        <Header />
        <div className="Result-content">
            <h1>Quiz result:</h1>
            <p>Choose a category to start you Result:</p>
        </div>
        <Footer />
    </div>
  );
}

export default Result;
