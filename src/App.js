import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Category from './components/common/category/Category';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Accordion from './components/common/accordion/Accordion';
import Quiz from './components/quiz/Quiz';
import Result from './components/results/Result';
import Topic from './components/topic/Topic';
import CountDownTimer from './components/countDownTimer/CountDownTimer';
import SelectedField from './components/selectedField/SelectedField';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/categories' element={<Category/>}/>
          <Route path='/header' element={<Header/>}/>
          <Route path='/footer' element={<Footer/>}/>
          <Route path='/accordion' element={<Accordion/>}/>
          <Route path='/quiz' element={<Quiz/>}/>
          <Route path='/result' element={<Result/>}/>
          <Route path='/topic' element={<Topic />}/>
          <Route path='/countdowntimer' element={<CountDownTimer />}/>
          <Route path='/selectedField' element={<SelectedField />}/>
        </Routes>
        {/* <Home /> */}
      </div>
    </Router>
    
  );
}

export default App;
