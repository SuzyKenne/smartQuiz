import React from 'react';
import './Home.css';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';

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
        <button>Get Started</button>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;
