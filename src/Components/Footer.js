import React from 'react';
import logo from './../assets/freev-white.png';
import logogray from './../assets/freev-gray.png';

import { Link } from "react-router-dom";


import './../styles/Footer.css';
import './../styles/App.css';


function Footer() {

  return (
      <div className="footer">
        <div className="container">
            <span>
                <img src={logogray} alt="FreeV Logo" />
                <h1>Free Ventures</h1>
                <p>Free Ventures is a 501c3 nonprofit dedicated towards yalalalala. Free Ventures is a 501c3 nonprofit dedicated towards yalalalala.</p>
            </span>
            <span>
                <h1>Stay updated with our newsletter</h1>
                <p>Every month we feature teams, talk about our processes, and keep the community updated with FreeV news! Drop your email below to stay updated with what's happening in the startup community!</p>
            </span>
            <span>
                <Link exact to="/">Home</Link>
                <Link to="/program">Program</Link>
                <Link to="/team">Team</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/partners">Partners</Link>
                <Link to="/fiatlux">fiat lux</Link>
                <Link to="/apply">apply</Link>
            </span>

        </div>
      </div>
  );
}

export default Footer;
