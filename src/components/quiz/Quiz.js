import React, { useEffect, useState } from "react";
import './Quiz.css';
import { Link, useNavigate } from 'react-router-dom';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import CountDownTimer from "../countDownTimer/CountDownTimer";
import UseAxios from "../../hooks/UseAxios";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress, Typography } from "@mui/material";
import { handleScoreChange, resetQuiz } from "../../redux/action";
import {decode} from 'html-entities';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const TIME_PER_QUESTION = {
  easy: 5,
  medium: 10,
  hard: 15
};

function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [answerStatus, setAnswerStatus] = useState(null);

  const {
    questionCategory,
    questionDifficulty,
    questionType,
    questionAmount,
    score
  } = useSelector(state => state);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let apiUrl = `/api.php?amount=${questionAmount}`;
  
  if(questionCategory){
    apiUrl = apiUrl.concat(`&categories=${questionCategory}`)
  }

  if(questionDifficulty){
    apiUrl = apiUrl.concat(`&difficulties=${questionDifficulty}`)
  }

  if(questionType){
    apiUrl = apiUrl.concat(`&type=${questionType}`)
  }
   
  const { response, loading } = UseAxios({url: apiUrl});

  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [totalTime, setTotalTime] = useState(0);

  // Reset score when component mounts
  useEffect(() => {
    dispatch(resetQuiz());
  }, [dispatch]);

  useEffect(() => {
    if(response?.results.length) {
      const timePerQuestion = TIME_PER_QUESTION[questionDifficulty];
      setTotalTime(response.results.length * timePerQuestion);
    }
  }, [response, questionDifficulty]);

  const handleTimeUp = () => {
    navigate('/result');
  }

  useEffect(() => {
    if(response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  useEffect(() => {
    if(response?.results.length){
      setAnswers(new Array(response.results.length).fill(null));
    }
  }, [response]);

  if (loading){
    return (
      <Box className="loading-container">
        <CircularProgress />
        <Typography>Loading quiz...</Typography>
      </Box>
    );
  }

  const handleClickAnswer = (answer) => {
    const question = response.results[questionIndex];
    const isCorrect = answer === question.correct_answer;
    setSelectedAnswer(answer);
    setAnswerStatus(isCorrect);

    if (isCorrect) {
      dispatch(handleScoreChange(score + 1));
    }

    setTimeout(() => {
      if (questionIndex + 1 < response.results.length) {
        setQuestionIndex(questionIndex + 1);
        setSelectedAnswer(null);
        setAnswerStatus(null);
      } else {
        navigate('/result');
      }
    }, 1000);
  }

  const getButtonStyle = (answer) => {
    if (selectedAnswer === null) return {};
    if (answer === response.results[questionIndex].correct_answer) {
      return { backgroundColor: 'green', color: 'white' };
    }
    if (answer === selectedAnswer && !answerStatus) {
      return { backgroundColor: 'red', color: 'white' };
    }
    return {};
  }

  const handleNext = () => {
    if(questionIndex + 1 < response.results.length){
      setQuestionIndex(questionIndex + 1);
      setSelectedAnswer(null);
      setAnswerStatus(null);
    }
  }

  const handleBack = () => {
    if(questionIndex > 0){
      setQuestionIndex(questionIndex - 1);
      setSelectedAnswer(null);
      setAnswerStatus(null);
    }
  }

  return (
    <div className="Quiz">
      <Header />
      <div className="quiz-content">
        <h1>Good luck for your Quiz!</h1>
        {totalTime > 0 && (
          <CountDownTimer initialTime={totalTime} onTimeUp={handleTimeUp}/>
        )}
        
        <div className="quiz-question">
          <h2>Question {questionIndex + 1}: {decode(response.results[questionIndex].question)}</h2>
          {options.map((data, id) => (
            <div key={id} className="answer-options">
              <button 
                onClick={() => handleClickAnswer(data)} 
                className="answer-button"
                style={getButtonStyle(data)}
                disabled={selectedAnswer !== null}
              >
                {decode(data)}
              </button>
            </div> 
          ))}                                        
        </div>
        <div className="quiz-navigation">
          <button onClick={handleBack} disabled={questionIndex === 0} className="nav-button">Back</button>
          <h2>Score: {score} / {response.results.length}</h2>
          <button onClick={handleNext} disabled={questionIndex === response.results.length - 1} className="nav-button">Next</button>
        </div>
        <Link className="get-started-button" to='/result'>Submit</Link>
      </div>
      <Footer />
    </div>
  );
}

export default Quiz;