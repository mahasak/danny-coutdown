import React from 'react';

export const Navigation = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">{props.title}</a>
            </div>
    </nav>
  );
};

export default Navigation;