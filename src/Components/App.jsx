import React from 'react';
import { Navigation } from './Navigation'
import { Body } from './Body'
import { Footer } from './Footer'
import { Copyright } from './Copyright'

const App = () => {
  return (
    <div id="root">
      <Navigation title="Dan's Delivery Countdown" />
      <Body date="2020-07-29 00:00:00"/>
      <Footer
        details="Vibhavadi Hospital, Tel. +66 2 561 1111 "
        address="51/3, Ngam Wong Wan Rd., Lat Yao, Bangkok 10900 Thailand"
      />
      <Copyright />
    </div>
  );
};


export default App;
