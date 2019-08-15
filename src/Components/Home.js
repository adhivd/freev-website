import React from 'react';
import logo from './../assets/free-v-square.png';
import { Link } from "react-router-dom";
import mentors from './../assets/mentors.png';
import pitch from './../assets/pitch.png';
import curriculum from './../assets/curriculum.png';

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
                    <p>Free Ventures is a semester long program that runs both in the fall and spring academic semesters. We connect founders to experienced mentors who can help think strategically about how to grow their businesses and provide a host of personalized resources to help startups scale into the future.</p>
                    <Link to="/program" className="underline">Learn more about the program</Link>
                </div>
                <div className="numbers">
                    <h3><span className="bigNumber">53</span> startups accelerated</h3>
                    <h3><span className="bigNumber">$30m</span> raised by teams post-program</h3>
                    <h3><span className="bigNumber">11</span> batches hosted</h3>
                </div>
            </div>
        </div>
        <div className="tiers">
            <div className="container">
                <h2>What we offer</h2>
                <div className="three-grid">
                    <article>
                        <img src={curriculum} alt="" />
                        <h3>Curriculum</h3>
                        <p>Each week, we bring in founders, investors, and industry experts to help guide our teams. These sessions provide startups with the opportunity to get a variety of perspectives on the problems they’re solving from people who have successfully started and scaled businesses.</p>
                    </article>
                    <article>
                        <img src={mentors} alt="" />
                        <h3>Mentorship</h3>
                        <p>Leveraging our network of industry partners, our program provides interactive sessions on product development, legal & banking, fundraising, and recruiting. These sessions help educate founders on topics that they need to know at the early stages of starting a company.</p>
                    </article>
                    <article>
                        <img src={pitch} alt="" />
                        <h3>Pitch prep</h3>
                        <p>Throughout the semester we work with founders to hone their ability to pitch to venture capital and angel investors successfully. Our program culminates with our pitch sessions with top tier VCs as well as a Demo Day, where startups get to share their progress with investors across Silicon Valley.</p>
                    </article>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Home;
