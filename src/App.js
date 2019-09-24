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
          {env.FRAMEWORK_NAME} is the best!
        </p>
      </header>
    </div>
  );
}

export default App;
