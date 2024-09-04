import React from "react";
import { Link } from 'react-router-dom';
import Category from "../common/category/Category";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import UseAxios from "../../hooks/UseAxios";
import { Box, CircularProgress, Typography } from "@mui/material";
import "./SelectedField.css";

function SelectedField() {
  const {response, error, loading } = UseAxios({url: "/api_category.php"});
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
      </Box>
    );
  }

  if (error){
    return (
      <Box className="error-container">
        <Typography variant="h6" color="error">Something happened!</Typography>
      </Box>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="selected-field">
      <Header />
      <form onSubmit={handleSubmit} className="form-container">
        <Category options={response.trivia_categories} label="Categories" />
        <Category options={difficultyLevel} label="Difficulty" />
        <Category options={typeOption} label="Type" />        
      </form>
      <Link to='/quiz' className="get-started-button">Start Quiz</Link>
      <Footer />
    </div>
  );
}

export default SelectedField;