import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (

      <nav className="navbar is-black" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <span className="navbar-item" href="">
            <a><h3 id="tool-title">
            🧬 COVID-19 Tracker
            </h3></a>
          </span>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a id="more-dropdown" className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <Link to={"/about"} className="navbar-item">About</Link>
                <a href="https://github.com/Katert/covid19-tracker" className="navbar-item">Project repo (Github)</a>
                <hr className="navbar-divider" />
                <Link to={"/report-issue"} className="navbar-item">Report an issue</Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to={'/contact'} id="contact-button" className="button">
                  <strong>Contact</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
