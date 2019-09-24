import React from 'react';
import logo from './logo.svg';
import './App.css';

const env = {
  FRAMEWORK_NAME: 'React',
  ...window.FAB_SETTINGS
}

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
          Learn {env.FRAMEWORK_NAME}
        </a>
      </header>
    </div>
  );
}

export default App;
