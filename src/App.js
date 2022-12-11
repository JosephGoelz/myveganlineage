import logo from './tree.svg';
//import logo from './logo.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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