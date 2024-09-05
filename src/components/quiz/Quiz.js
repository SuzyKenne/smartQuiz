import React, { useEffect, useState } from "react";
import './Quiz.css';
import { Link, useNavigate } from 'react-router-dom';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import CountDownTimer from "../countDownTimer/CountDownTimer";
import UseAxios from "../../hooks/UseAxios";
import { useSelector } from "react-redux";
import { Box, CircularProgress, Typography } from "@mui/material";

const getRandomInt = (max) =>{
  return Math.floor(Math.random() * Math.floor(max));
}


function Quiz() {

  const {
    questionCategory,
    questionDifficulty,
    questionType,
    questionAmount,
    score
  } = useSelector(state => state);

  const history = useNavigate();
  let apiUrl = `/api.php?amount=${questionAmount}`;
  
  if(!questionCategory){
    apiUrl = apiUrl.concat(`&categories=${questionCategory}`)
  }

  if(!questionDifficulty){
    apiUrl = apiUrl.concat(`&difficulties=${questionDifficulty}`)
  }

  if(!questionType){
    apiUrl = apiUrl.concat(`&type=${questionType}`)
  }
   

  const { response, loading} = UseAxios({url: apiUrl});
  // console.log(response)

  const [questionIndex, setQuestionIndex] = useState(0);
  const [option, setOption] = useState([]);

  

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
    }
  }, [response, questionIndex ]);
 
//  console.log(response)

 if (loading){
  return (
    <Box className="loading-container">
        <CircularProgress />
        <Typography>Loading quiz...</Typography>
     </Box>
    );
  
 }

  const handleClickAnswer = () => {
    if(questionIndex + 1 < response.results.length){
      setQuestionIndex(questionIndex + 1);
   } else {

    history.push('/result');
   }
}
  return (
    <div className="Quiz">
        <Header />
        <div className="quiz-content">
            <h1>Good luck for your Quiz!</h1>
            <CountDownTimer seconds={90}/>
            <div className="quiz-question">              
              <h2>Question {questionIndex + 1}: {response.results[questionIndex].question}</h2>
              {option.map( (data, id) => (
                  <div key={id} className="answer-options">
                    <button onClick={handleClickAnswer} className="answer-button">{data}</button>
                 </div> 
              ))}                           
            </div>
            <div className="quiz-navigation">
              <Link className="nav-button">Back</Link>
              <h2>{score} : {response.results.length}</h2>
              <Link className="nav-button">Next</Link>
            </div>
            <Link to='/result' className="get-started-button">Submit</Link>
        </div>
        <Footer />
    </div>
  );
}

export default Quiz;
