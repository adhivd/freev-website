import React from 'react';
import logo from './../assets/free-v-square.png';
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
            </div>
        </div>
    </section>
  );
}

export default Home;
