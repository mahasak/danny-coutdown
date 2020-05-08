import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import FlipClock from './FlipClock/FlipClock'
//import FlipClock from 'x-react-flipclock'
import * as serviceWorker from './serviceWorker';

// function component
const App = () => {
  return (
    <div id="root">
      <div style={{width:300}}>
          <FlipClock 
            type = "countdown"
            count_to = "2020-07-29 00:00:00"
          />
      </div>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
