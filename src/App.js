import React, {useState} from "react"

import logo from './tree.svg';
//import logo from './logo.svg'
import './App.css';
// import {Login} from './login'
// import {Register} from '/register'

//const signIn = require('./signin.js');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <nav>
          <button>Menu</button>
          <div className="collapsible">
            <a
                className="App-link"
                href="/login"
            >
                Sign In
            </a>
            <br/>
            <a
                className="App-link"

                href="#"
            >
              Sign Up
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;


/*

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
return (
<div>
<h1>Welcome to My Website!</h1>
<p>This is the homepage of my website.</p>
<Link to="/about">Learn more about me</Link>
</div>
);
};

export default Home
 */