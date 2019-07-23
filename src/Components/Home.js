import React from 'react';
import logo from './../assets/free-v-square.png';
import rocket from './../assets/rocket.png';

import { Link } from "react-router-dom";

import './../styles/App.css';
import './../styles/Home.css';


function Home() {
  return (
    <section>
        <div className="splash">
            <div className="container">
                <img src={logo} alt="free v logo"/>
                <h1>Empowering the brighest Berkeley founders to build great startups</h1>
                <h2>Free Ventures is Cal’s leading pre-seed startup incubator</h2>
                <Link to="apply" className="apply">Apply to Batch XII</Link>
            </div>
        </div>
        <div className="overview">
            <div className="container">
                <div className="icon"></div>
                <h2>The Free Ventures Accelerator</h2>

            </div>
        </div>
    </section>
  );
}

export default Home;
