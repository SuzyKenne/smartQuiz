import React from "react";
import '../footer/Footer.css';
import logo from '../../../assets/logo/logo1.png';

function Footer(){
    return (
        <div className="footer" >
            <div className="container">
                <div className="logo">
                 <img src={logo} alt='logo'width={50}/>
                 <h2>SmartQuiz</h2>
                </div>
                <p>&copy; 2024 SmartQuiz. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#about">About</a>
                    <a href="#categories">categories</a>
                    <a href="#blog">blog</a>
                    <a href="#contact">contact</a>
                    <a href="#privacy-policy">Privacy-policy</a>
                </div>
                <div className="social-media">
                    <a href="#facebook">Facebook</a>
                    <a href="#twiter">Twiter</a>
                    <a href="#instagram">Instagram</a>
                    <a href="#lindkedln">lindkedln</a>
                </div>
                {/* <div className="partners">
                    <p>In partnership with:</p>
                    <img src="/assets/logos/partner1.png" alt="Partner 1" />
                    <img src="/assets/logos/partner2.png" alt="Partner 2" />
                </div> */}
                <div className="newsletter-signup">
                    <p>Subscribe to our newsletter for updates:</p>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Footer;