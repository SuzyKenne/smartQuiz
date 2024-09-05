import React , { useEffect}  from "react";
import { Link } from 'react-router-dom';
import Category from "../common/category/Category";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import UseAxios from "../../hooks/UseAxios";
import { Box, CircularProgress,  Typography } from "@mui/material";
import "./SelectedField.css";
import TextFieldForm from "./TextFieldForm";

function SelectedField() {

    
  const {response, error, loading } = UseAxios({url: '/api_category.php'});
    

  useEffect(() => {
    // console.log('SelectedField rendered');
    // console.log('Loading:', loading);
    // console.log('Error:', error);
    // console.log('Response:', response);
  }, [loading, error, response]);

  const difficultyLevel = [
    {id: "easy" , name: "easy"},
    {id: "medium" , name: "medium"},
    {id: "hard" , name: "hard"},
  ];

  const typeOption = [
    {id: "multiple", name: "Multiple Choice"},
    {id: "boolean", name: "True/False"}
  ];



  if(loading){
    return (
      <Box className="loading-container">
        <CircularProgress />
        <Typography>Loading categories...</Typography>
     </Box>
    );
  }

  if (error){
    return (
      <Box className="error-container">
        <Typography variant="6" color="error">Something happened!</Typography>
      </Box>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
 }
  return (
    <div className="selected-field">
      <Header />
      <form onSubmit={handleSubmit} className="form-container">
        <Category options={response.trivia_categories} label="Categories" />
        <Category options={difficultyLevel} label="Difficulties" />
        <Category options={typeOption} label="Types" />    
        <TextFieldForm label= "Amount of questions"/> 
        <Link to='/quiz' type="submit" className="get-started-button">Start Quiz</Link>
      </form>
      
      <Footer />
    </div>
  );
}

export default SelectedField;