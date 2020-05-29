import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Panel extends Component {
  render() {
    return (
      <div>
        <p className="panel-tabs">
          <NavLink to="/" className="is-active">
            Infections
          </NavLink>
          <NavLink to="/cured">Cured</NavLink>
          <NavLink to="dead">Dead</NavLink>
        </p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input className="input is-dark" type="text" placeholder="Search" />
            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Panel;
