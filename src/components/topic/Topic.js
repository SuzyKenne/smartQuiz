import React from "react";
import { Link } from 'react-router-dom';
import './Topic.css';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

function Topic (){
    return (
        <div className="Topic">
            <Header />
            <h2>hello world</h2>
            <Link to='/quiz'>Start</Link>
            <Footer />
        </div>
    )
}

export default Topic;