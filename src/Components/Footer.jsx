import React from 'react';

export const Footer = (props) => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">{props.details}<br />{props.address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


