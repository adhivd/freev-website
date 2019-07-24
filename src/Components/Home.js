import React from 'react';
import logo from './../assets/free-v-square.png';
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
                    <p>Here is a really great description about the FreeV Accelerator. If I was a great copy writer, I would write all of this in a night. Here is a really great description about the FreeV Accelerator. If I was a great copy writer, I would write all of this in a night. Here is a really great description about the FreeV Accelerator. If I was a great copy writer, I would write all of this in a night</p>
                    <Link to="/program" className="underline">Learn more about the program</Link>
                </div>
                <div className="numbers">
                    <h3><span className="bigNumber">53</span> startups accelerated</h3>
                    <h3><span className="bigNumber">$30m</span> raised by teams post-program</h3>
                    <h3><span className="bigNumber">11</span> batches hosted</h3>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Home;
