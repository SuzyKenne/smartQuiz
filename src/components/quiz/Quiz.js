import React from "react";
import './Quiz.css';
import { Link } from 'react-router-dom';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import CountDownTimer from "../countDownTimer/CountDownTimer";
import UseAxios from "../../hooks/UseAxios";


function Quiz() {


  let apiUrl = `/api.php?amount=10`;
  const { response, loading} = UseAxios({url: apiUrl});
  console.log(response)
  return (
    <div className="Quiz">
        <Header />
        <div className="quiz-content">
            <h1>Good luck for your Quiz!</h1>
            <CountDownTimer seconds={90}/>
            <div className="quiz-question">
              <h2>question title</h2>
              <div className="answer-options">
                 <button className="answer-button">question1</button>
                <button className="answer-button">question1</button>
                <button className="answer-button">question1</button>
                <button className="answer-button">question1</button>
              </div>              
            </div>
            <div className="quiz-navigation">
              <Link className="nav-button">Back</Link>
              <Link className="nav-button">Next</Link>
            </div>
            <Link to='/result' className="get-started-button">Submit</Link>
        </div>
        <Footer />
    </div>
  );
}

export default Quiz;
