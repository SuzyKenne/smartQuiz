import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './Result.css';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

function Result() {
  const {
    score,
    questionAmount,
    questionDifficulty,
    questionType
  } = useSelector(state => state);

  const navigate = useNavigate();

  const percentage = (score / questionAmount) * 100;

  

  const handlePlayAgain = () => {
    navigate('/');
  };

  return (
    <div className="Result">
      <Header />
      <div className="Result-content">
        <h1>Quiz Result</h1>
        <div className="result-details">
          <p>Final Score: {score} / {questionAmount}</p>
          <p>Percentage: {percentage.toFixed(2)}%</p>
          <p>Difficulty: {questionDifficulty.charAt(0).toUpperCase() + questionDifficulty.slice(1)}</p>
          <p>Type: {questionType.charAt(0).toUpperCase() + questionType.slice(1)}</p>
        </div>
        <div className="result-message">
          {percentage >= 70 ? (
            <p>Congratulations! You did great!</p>
          ) : percentage >= 40 ? (
            <p>Good job! Keep practicing to improve your score.</p>
          ) : (
            <p>Don't worry! Keep learning and try again.</p>
          )}
        </div>
        <button onClick={handlePlayAgain} className="play-again-button">
          Play Again
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Result;