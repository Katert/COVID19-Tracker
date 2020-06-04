import React, { Component } from "react";
import CountriesList from "./CountriesList";

class Panel extends Component {

  constructor() {
    super();
    this.state = {
      activeLink: "total"
    };

  }

  setTotalActive = () => {
    this.setState({
      activeLink: "total",
    });
  };

  setCuredActive = () => {
    this.setState({
      activeLink: "cured",
    });
  };

  setDeathsActive = () => {
    this.setState({
      activeLink: "deaths",
    });
  };

  render() {
    return (
      <div>
        <p className="panel-tabs">
          <a
            className={this.state.activeLink === "total" ? "is-active" : ""}
            onClick={this.setTotalActive}
          >
            <strong>Total cases</strong>
          </a>
          <a
            className={this.state.activeLink === "cured" ? "is-active" : ""}
            onClick={this.setCuredActive}
          >
            <strong>Cured</strong>
          </a>
          <a
            className={this.state.activeLink === "deaths" ? "is-active" : ""}
            onClick={this.setDeathsActive}
          >
            <strong>Deaths</strong>
          </a>
        </p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input className="input is-dark" type="text" placeholder="Search" />
            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <div className="countries-list">
          <CountriesList modifier={this.state.activeLink} data={this.props.data} />
        </div>
      </div>
    );
  }
}

export default Panel;
