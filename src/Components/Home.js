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
                <div className="mini-header">
                    <span className="icon"></span>
                    <h2>The Free Ventures Accelerator</h2>
                </div>
                <div className="numbers">
                    <p>53 teams</p>
                    <p>$40m raised</p>
                    <p>11 batches</p>
                </div>

                <p>Here is a really great description about the FreeV Accelerator. If I was a great copy writer, I would write all of this in a night</p>

            </div>
        </div>
    </section>
  );
}

export default Home;
