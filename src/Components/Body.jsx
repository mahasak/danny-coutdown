import React from 'react';
import FlipClock from './FlipClock'
import Avartar from './baby-newborn.svg'
export const Body = (props) => {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <img className="masthead-avatar mb-5" src={Avartar} alt="" />
        <h1 className="masthead-heading text-uppercase mb-0">Dan Pijittum</h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <div style={{ width: 300 }}>
          <FlipClock
            type="countdown"
            count_to={props.date}
          />
        </div>
      </div>
    </header>
  )
}


export default Body;

