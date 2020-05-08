import React from 'react';
import logo from './logo.svg';
import path from 'path';

import './App.css';
var uiModules = ['react-flip-counter'],
    includes = uiModules.reduce((res, name) => {
      res.push(path.resolve('.', 'node_modules/' + name));

      return res;
    }, [path.resolve('.', 'src/')]);
    
import Counter from 'react-flip-counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter
    onStop={() => alert('stopped')}
    stop={new Date('Wed Nov 15 2020 15:57:38 GMT+0300 (MSK)')}/>
      </header>
    </div>
  );
}

export default App;
