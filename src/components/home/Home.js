import React from 'react';
import './Home.css';
import { Link } from  'react-router-dom';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import Accordion from '../common/accordion/Accordion';
import Category from '../common/category/Category';

function Home() {
  return (
    <div className="Home">
      <Header />
      <div className='home-slogan'>
        <h1>SmartQuiz challenge your mind, master your knowledge!</h1>
        <p> SmartQuiz is your ultimate destination for engaging,
          fun, and educational quizzes designed to challenge
            your intellect and expand your horizons. 
        </p>
        <Link to='/quiz' className="get-started-button">Get Started</Link>
        <div className='accordion'>
          <h1>Explore All Our Categories</h1>
          <Category />
        </div>
        <div className='accordion'>
          <h1>SmartQuiz FAQs</h1>
         <Accordion />       
        </div> 
      </div> 
        
      <Footer />
    </div>
  );
}

export default Home;
