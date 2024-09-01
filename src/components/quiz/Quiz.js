import React from "react";
import './Quiz.css';
import { Link } from 'react-router-dom';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";


function Quiz() {
  return (
    <div className="Quiz">
        <Header />
        <div className="quiz-content">
            <h1>Welcome to SmartQuiz!</h1>
            <p>Choose a category to start you quiz:</p>
            <Link to='/result' className="get-started-button">Submit</Link>
        </div>
        <Footer />
    </div>
  );
}

export default Quiz;
