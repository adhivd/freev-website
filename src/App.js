import React from 'react';
import Header from './Components/Header.js';
import Home from './Components/Home.js';
import Team from './Components/Team.js';

import { BrowserRouter as Router, Route } from "react-router-dom";

import './styles/App.css';

function App() {
  return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/team" component={Team} />
        </div>
      </Router>
  );
}

export default App;
