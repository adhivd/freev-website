import React from 'react';
import ContactForm from './ContactForm';
import HomeCompany from './HomeCompany';
import logo from './../assets/free-v-square.png';
import { Link } from "react-router-dom";
import mentors from './../assets/mentors.png';
import pitch from './../assets/pitch.png';
import curriculum from './../assets/curriculum.png';

import paladin from './../assets/paladin.png';
import distributed from './../assets/distributed.png';
import gainful from './../assets/gainful.png';

import arrow from './../assets/arrow.png';
import whitearrow from './../assets/arrow-white.png'

import './../styles/App.css';
import './../styles/Home.css';


function Home() {

    let companiesContent = [{
        logo: paladin,
        companyName: "Paladin Drones",
        description: "Paladin Drones deploys drones to 911 calls to give first responders instant access to critical information.",
        raised: "$1.3m raised",
        link: "https://google.com",
        linkTitle: "Read more on TechCrunch",
        tags: [
            {
                content: "FreeV SP17",
                backgroundColor: "#67379A"
            },
            {
                content: "YC S2018",
                backgroundColor: "#EC8641"
            }
        ]
    },
    {
        logo: distributed,
        companyName: "Distributed Systems",
        description: "Distributed Systems builds a decentralized identity platform. Acquired by Coinbase.",
        raised: "$1.7m raised",
        link: "https://google.com",
        linkTitle: "Learn about the acquisition",
        tags: [
            {
                content: "FreeV SP16",
                backgroundColor: "#67379A"
            },
            {
                content: "Acquired",
                backgroundColor: "#424242"
            }
        ]
    },
    {
        logo: gainful,
        companyName: "Gainful",
        description: "Personalized protein powder, delivered directly to your doorstep.",
        raised: "$120k raised",
        link: "https://google.com",
        linkTitle: "Check out their website",
        tags: [
            {
                content: "FreeV SP18",
                backgroundColor: "#67379A"
            },
            {
                content: "YC W2018",
                backgroundColor: "#EC8641"
            }
        ]
    }];

    let sponsorsContent = [distributed, distributed,distributed,distributed,distributed,distributed,distributed,distributed]

    let companies = companiesContent.map((company) => {
        return <HomeCompany
                logo={company.logo}
                companyName={company.companyName}
                description={company.description}
                raised={company.raised}
                link={company.link}
                linkTitle={company.linkTitle}
                tags={company.tags}
            />
    })

    let sponsors = sponsorsContent.map((sponsor) => {
        return <img src={sponsor} alt={sponsor}/>
    });

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
                    <Link to="/program" className="genericButton">Learn more about the program </Link>

                </div>
                <div className="numbers">
                    <h3><span className="bigNumber">53</span> startups accelerated</h3>
                    <h3><span className="bigNumber">$30m</span> raised by teams post-program</h3>
                    <h3><span className="bigNumber">11</span> batches hosted</h3>
                </div>
            </div>
        </div>
        <div className="tiers homeSection">
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
        <div className="portfolio homeSection">
            <div className="container">
                <h2>Selected portfolio</h2>
                <div className="three-grid">
                    {companies}
                </div>
                <Link to="/portfolio" className="genericButton">See all our portfolio companies</Link>
            </div>
        </div>
        <div className="sponsors homeSection">
            <div className="container">
                <h2>Our partners</h2>
                <p>These sponsors help make FreeV and our accelerator possible with their support and resources</p>
                <div className="four-grid">
                    {sponsors}
                </div>
                <Link to="/partners" className="genericButton">Learn more about our partnerships</Link>
                    <h2>Our partners</h2>
                    <p>These sponsors help make FreeV and our accelerator possible with their support and resources</p>
                    <div className="four-grid">
                        {sponsors}
                    </div>
                    <Link to="/partners" className="genericButton">Learn more about our partnerships</Link>
            </div>
        </div>
        <div className="contactSection homeSection">
            <div className="container">
                <h2>Looking to get involved?</h2>
                <p>We believe a university ecosystem is the ideal place to start up, and Cal is one of the best. But there's still a huge need for a strengthened community on campus to bring students together to tackle meaningful challenges. Join us in our quest to build a better community.</p>
                <ContactForm />
            </div>
        </div>
    </section>
  );
}

export default Home;
