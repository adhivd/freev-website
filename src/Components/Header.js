import React from 'react';
import logo from './../assets/free-v-square.png';
import { NavLink, Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import logofull from './../assets/logo-full.png';


import './../styles/App.css';

function Header() {

    var nav;

  return (
      <header className="header">
        <div className="container">
            <Link exact to="/">
                <div className="logo">
                    <img src={logofull} alt="free v logo"/>
                </div>
            </Link>

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
            <span className="mobileNav" >
                <Menu right noOverlay >
                    <NavLink exact to="/" activeClassName="activeLinkStyle" >home</NavLink>
                    <NavLink to="/program" activeClassName="activeLinkStyle" >program</NavLink>
                    <NavLink to="/team" activeClassName="activeLinkStyle" >team</NavLink>
                    <NavLink to="/portfolio" activeClassName="activeLinkStyle" >portfolio</NavLink>
                    <NavLink to="/partners" activeClassName="activeLinkStyle" >partners</NavLink>
                    <NavLink to="/fiatlux" activeClassName="activeLinkStyle" >fiat lux</NavLink>
                    <NavLink to="/apply" activeClassName="activeLinkStyle" >apply</NavLink>
                </Menu>
            </span>

        </div>
      </header>
  );
}

export default Header;
