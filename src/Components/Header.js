import React from 'react';
import logo from './../assets/free-v-square.png';
import { NavLink } from "react-router-dom";

import './../styles/App.css';

function Header() {
  return (
      <header className="header">
        <div className="container">
            <img src={logo} alt="free v logo"/>
            <h1>Free Ventures</h1>
            <div className="nav">
                <ul>
                    <li><NavLink exact to="/" activeClassName="activeLinkStyle" >home</NavLink></li>
                    <li><NavLink to="/program" activeClassName="activeLinkStyle" >program</NavLink></li>
                    <li><NavLink to="/team" activeClassName="activeLinkStyle" >team</NavLink></li>
                    <li><NavLink to="/portfolio" activeClassName="activeLinkStyle" >portfolio</NavLink></li>
                    <li><NavLink to="/partners" activeClassName="activeLinkStyle" >partners</NavLink></li>
                    <li><NavLink to="/fiatlux" activeClassName="activeLinkStyle" >fiat lux</NavLink></li>
                    <li><NavLink to="/apply" activeClassName="activeLinkStyle" >apply</NavLink></li>
                </ul>
            </div>
        </div>
      </header>
  );
}

export default Header;
