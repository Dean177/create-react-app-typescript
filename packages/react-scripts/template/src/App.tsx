import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import './AppScss.scss';
import './AppSass.sass';

import logo from './logo.svg';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code className="App-name">src/App.tsx</code> and
      save to reload.
    </p>
  </div>
);

export default hot(App);
