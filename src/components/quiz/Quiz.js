import React, { useEffect, useState } from "react";
import './Quiz.css';
import { Link, useNavigate } from 'react-router-dom';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import CountDownTimer from "../countDownTimer/CountDownTimer";
import UseAxios from "../../hooks/UseAxios";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress, Typography } from "@mui/material";
import { handleScoreChange } from "../../redux/action";
import {decode} from 'html-entities';

const getRandomInt = (max) =>{
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
   

  const { response, loading} = UseAxios({url: apiUrl});
  // console.log(response)

  const [questionIndex, setQuestionIndex] = useState(0);
  const [option, setOption] = useState([]);

  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    if(response?.results.length) {
      setTotalTime(response.results.length * 5);
    }
  }, [response]);

  const handleTimeUp = () => {
    navigate('/result');
  }

  

  console.log(option);

  useEffect(() => {
    if(response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOption(answers);

      const timePerQuestion = TIME_PER_QUESTION[questionDifficulty];
      setTotalTime (response.results.length * timePerQuestion)
    }
  }, [response, questionIndex , questionDifficulty]);


  //initialize the answers array
  useEffect(() => {
    if(response?.results.length){
      setAnswers(new Array(response.results.length).fill(null));
    }
  }, [response]);
 
//  console.log(response)

 if (loading){
  return (
    <Box className="loading-container">
        <CircularProgress />
        <Typography>Loading quiz...</Typography>
     </Box>
    );
  
 }
  //update selected answer
  // const handleAnswerSelected = (answer) => {
  //   setSelectedAnswer(answer);
  //   const newAnswers = [...answers];
  //   newAnswers[questionIndex] = answer;
  //   setAnswers(newAnswers);
  // }

  //switch to the next question
  const handleNext = () => {
    if(questionIndex + 1 < response.results.length){
      setQuestionIndex(questionIndex + 1);
      setSelectedAnswer(answers[questionIndex + 1]);
    }
  }

  //move to the previous question
  const handleBack = () => {
    if(questionIndex > 0){
      setQuestionIndex(questionIndex - 1);
      setSelectedAnswer(answers[questionIndex - 1]);
    }
  }

  //handle the final score
  const handleSubmit = () => {
    let newScore = 0;
    answers.forEach((answer, index) => {
      if(answer === response.results[index].correct_answer){
        newScore += 1;
      }
    });
    dispatch(handleScoreChange(newScore));
    // navigate('/result');

  }

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if(e.target.textContent === question.correct_answer){
      dispatch(handleScoreChange(score + 1))
    }

    if(questionIndex + 1 < response.results.length){
      setQuestionIndex(questionIndex + 1);
   }
   else {

    navigate('/result');
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
            {/* {option.map( (data, id) => (
                  <div key={id} className="answer-options">
                    <button 
                      onClick={() => handleAnswerSelected(data)
                      } className={`answer-button ${selectedAnswer ===  data 
                      ? 'selected' : '#4a90e2'}}`}>
                      {decode(data)}
                    </button>
                 </div> 
              ))}   */}

              {option.map( (data, id) => (
                  <div key={id} className="answer-options">
                    <button onClick={handleClickAnswer} className={`answer-button ${selectedAnswer ===  data 
                      ? 'selectedAnswer' : '#4a90e2'}`}>{decode(data)}</button>
                 </div> 
              ))}                                        
            </div>
            <div className="quiz-navigation">
              <Link onClick={handleBack} disabled={questionIndex === 0} className="nav-button">Back</Link>
              <h2>{score} : {response.results.length}</h2>
              <Link onClick={handleNext} className="nav-button" >Next</Link>
            </div>
            <Link onClick={handleSubmit} className="get-started-button" to='/result'>Submit</Link>
        </div>
        <Footer />
    </div>
  );
}

export default Quiz;