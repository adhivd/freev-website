import React from 'react';
import GenericTop from './GenericTop';
import GenericPage from './GenericPage';
import { Link } from "react-router-dom";
import SpotLightArticle from './SpotlightArticle';

import './../styles/App.css';
import './../styles/Program.css';

import freevgroup from './../assets/program/freevgroup.jpg'
import thiel from './../assets/program/thiel.jpg';
import forbes from './../assets/program/forbes.png';
import yc from './../assets/program/yc.png';
import greylock from './../assets/program/greylock.jpeg';
import accel from './../assets/program/accel.png';
import kp from './../assets/program/kp.png';

import equity from './../assets/program/business.png';
import mentors from './../assets/program/mentorship.png';
import workshops from './../assets/program/training.png';
import community from './../assets/program/group.png';
import legal from './../assets/program/banking.png';
import fundraising from './../assets/program/fundraise.png';

import method from './../assets/program/method.png';
import intro from './../assets/program/intro.jpg';
import spotlight from './../assets/program/spotlight.png';

function Program() {

    let articles = [{
        image: intro,
        headline: "The Free Ventures Method",
        date: "March 7, 2017"
    },
    {
        image: method,
        headline: "Introducing Free Ventures' Spring '17 Batch & Trends in Berkeley Startups!",
        date: "February 28, 2017"
    },
    {
        image: spotlight,
        headline: "Founder Spotlight: Iris BCI, Free Ventures Fall '16 Batch",
        date: "January 29, 2017"
    }
    ];

    let spotarticles = articles.map((art) => {
        return <SpotLightArticle
                image={art.image}
                headline={art.headline}
                date={art.date}
                />
    })

    return (
        <section>
            <GenericTop
                header={'Program'}
                description={'Each semester the brightest UC Berkeley student founders apply to Free Ventures to bring their dissertation research, side projects, or innovative products to market.'}
            />
            <div>
                <div className="tiers">
                    <div className="container">
                        <h2>What we provide</h2>
                        <div className="three-grid">
                        <article>
                            <span>
                                <img src={equity} alt="" />
                            </span>

                            <span>
                                <h3>Equtiy-free Funds</h3>
                                <p>Each week, we bring in founders, investors, and industry experts to help guide our teams.</p>
                            </span>
                        </article>
                        <article>
                            <span>
                                <img src={mentors} alt="" />
                            </span>

                            <span>
                                <h3>Mentorship</h3>
                                <p>Leveraging our network of industry partners, our program provides interactive sessions. </p>
                            </span>

                        </article>
                        <article>
                            <span>
                                <img src={workshops} alt="" />
                            </span>
                            <span>
                                <h3>Workshops</h3>
                                <p>We work with founders to hone their ability to pitch to venture capital and angel investors successfully. </p>
                            </span>
                        </article>
                        <article>
                            <span>
                                <img src={community} alt="" />
                            </span>

                            <span>
                                <h3>Community</h3>
                                <p>Each week, we bring in founders, investors, and industry experts to help guide our teams.</p>
                            </span>
                        </article>
                        <article>
                            <span>
                                <img src={legal} alt="" />
                            </span>

                            <span>
                                <h3>Legal/Banking Information</h3>
                                <p>Leveraging our network of industry partners, our program provides interactive sessions. </p>
                            </span>

                        </article>
                        <article>
                            <span>
                                <img src={fundraising} alt="" />
                            </span>
                            <span>
                                <h3>Fundraising Guidance</h3>
                                <p>We work with founders to hone their ability to pitch to venture capital and angel investors successfully. </p>
                            </span>
                        </article>
                        </div>
                    </div>
                </div>
                <div className="trackRecord">
                    <div className="container">
                        <h2>Our Track Record</h2>
                        <div className="trackInfo">
                            <div className="trackFounders">
                                <h1>FOUNDERS</h1>
                                <div className="foundersPics">
                                    <img src ={thiel}/>
                                    <img src ={forbes}/>
                                </div>
                            </div>
                            <div className="trackTeams">
                                <h1>TEAMS</h1>
                                <h3>over $30 million raised from:</h3>
                                <div className="teamsVCPics">
                                    <img src={yc}/>
                                    <img src={greylock}/>
                                    <img src={kp}/>
                                    <img src={accel}/>
                                </div>
                                <Link to="/portfolio" className="genericButton">See all our companies</Link>
                            </div>
                        </div>
                        <div className="trackImage">
                            <img src={freevgroup}/>
                        </div>
                    </div>
                </div>

                <div className="spotlightArticles">
                    <div className="container">
                        <h2>FreeV Spotlight</h2>
                        <h3>Keep up to date on our insights, obervations, and updates about the community!</h3>
                        <div className="three-grid">
                            {spotarticles}
                        </div>
                        <a href="https://medium.com/@FreeVentures" className="genericButton">See all our articles</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Program;
