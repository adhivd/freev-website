import React from 'react';
import ContactForm from './ContactForm';
import './../styles/App.css';
import './../styles/Partners.css';
import GenericTop from './GenericTop';
import GenericPage from './GenericPage';

import accel from './../assets/partners/accel.png';
import aws from './../assets/partners/aws.png';
import cooley from './../assets/partners/cooley.png';
import fbstart from './../assets/partners/fbstart.png';
import gc from './../assets/partners/gc.png';
import github from './../assets/partners/github.png';
import greylock from './../assets/partners/greylock.jpg';
import house from './../assets/partners/house.png';
import kpcb from './../assets/partners/kpcb.png';
import lightspeed from './../assets/partners/lightspeed.png';
import pear from './../assets/partners/pear.png';
import scet from './../assets/partners/scet.png';
import spark from './../assets/partners/spark.png';
import svangel from './../assets/partners/svangle.png';
import svb from './../assets/partners/svb.png';
import ycombinator from './../assets/partners/ycombinator.png';

import placeholder from './../assets/partners/placeholder.png';

import { Link } from "react-router-dom";

function Partners() {

    let partnersContent = [
        {
            logo: kpcb,
            name: 'KPCB',
            website: "http://www.kpcb.com/"
        },
        {
            logo: greylock,
            name: 'Greylock Partners',
            website: "http://www.greylock.com/"
        },
        {
            logo: pear,
            name: 'Pear VC',
            website: "http://www.pear.vc/"
        },
        {
            logo: accel,
            name: 'Accel',
            website: "https://www.accel.com/"
        },
        {
            logo: cooley,
            name: 'Cooley',
            website: "https://www.cooley.com"
        },
        {
            logo: house,
            name: 'The House Fund',
            website: "http://thehouse.fund/"
        },
        {
            logo: svb,
            name: 'Silicon Valley Bank',
            website: "https://www.svb.com/"
        },
        {
            logo: gc,
            name: 'General Catalyst',
            website: "https://www.generalcatalyst.com/"
        },
        {
            logo: scet,
            name: 'Stardja Center for Entreprenuership and Technology',
            website: "https://scet.berkeley.edu/"
        },
        {
            logo: fbstart,
            name: 'FB Start',
            website: "https://fbstart.com/"
        },
        {
            logo: github,
            name: 'Github',
            website: "http://github.com"
        },
        {
            logo: aws,
            name: 'AWS Activate',
            website: "https://aws.amazon.com/activate/"
        },
    ];

    let partners = partnersContent.map((partner) => {
        return (<a href={partner.website}><img src={partner.logo} alt={partner.name} /></a>);
    });

    return (
        <section>
            <GenericTop
                header={'Our Partners'}
                description={'We’re proud to work with a select group of partners who share our passion for supporting Berkeley’s startup ecosystem.'}
            />
            <div>
                <div className="partners">
                    <div className="container">
                        <h2>We’re proud to work with a select group of partners who share our passion
                            for supporting Berkeley’s startup ecosystem. </h2>
                        <div className="four-grid">
                            {partners}
                        </div>
                    </div>
                </div>
                <div className="quoteSection">
                </div>
                <div className="legalBanking">
                    <h2> Legal and Banking Partners </h2>
                    <div className="info">
                        <div className="cooley">
                            <img src={cooley} alt="cooley"/>
                            <div className="lbtext">
                                <p> Lorem ipsum dolor sit amet, semper laoreet an has. Platonem persecuti est in, adhuc velit est no. Mea ad eros nostrum legendos, vis sint harum ne </p> 
                            </div>
                        </div>
                        <div className="svb">
                            <img src={svb} alt="svb"/>
                            <div className="lbtext">
                                <p> Lorem ipsum dolor sit amet, semper laoreet an has. Platonem persecuti est in, adhuc velit est no. Mea ad eros nostrum legendos, vis sint harum ne </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="partnerValue">
                    <h2>Our value add for partners</h2>
                    <div className="value">
                        <div className="valueImage">
                            <img src={placeholder}/>
                        </div>
                        <div>
                            <h3><mark>Access to all batch companies</mark></h3>
                            <p> Lorem ipsum dolor sit amet, semper laoreet an has. Platonem persecuti est in, adhuc velit est no. Mea ad eros nostrum legendos, vis sint harum ne </p>
                        </div>
                    </div>

                    <div className="value">
                        <div className="valueImage">
                            <img src={placeholder}/>
                        </div>
                        <div>
                            <h3><mark>Campus network of entrepreneurship focused students</mark></h3>
                            <p> Lorem ipsum dolor sit amet, semper laoreet an has. Platonem persecuti est in, adhuc velit est no. Mea ad eros nostrum legendos, vis sint harum ne </p>
                        </div>
                    </div>

                    <div className="value">
                        <div className="valueImage">
                            <img src={placeholder}/>
                        </div>
                        <div>
                            <h3><mark>Berkeley ecosystem trends</mark></h3>
                            <p> Lorem ipsum dolor sit amet, semper laoreet an has. Platonem persecuti est in, adhuc velit est no. Mea ad eros nostrum legendos, vis sint harum ne </p>
                        </div>
                    </div>
                </div>
                <div className="contactSection homeSection">
                    <div className="container">
                        <h2>Looking to get involved?</h2>
                        <p>We’re happy to share more on the partnership opportunities available at Free Ventures. We are a non-profit organization run by students, for students, and rely upon the support of alumni, entrepreneurs, investors, and Bay Area firms for resources and mentorship for our teams. If you support our mission and would like to contribute towards helping Cal student entrepreneurs, we would welcome your involvement.
                        </p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partners;
