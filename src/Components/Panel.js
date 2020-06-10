import React, { Component } from "react";
import CountriesList from "./CountriesList";

class Panel extends Component {
  constructor() {
    super();
    this.state = {
      activeLink: "cases"
    };
  }

  setActiveCategory = (category) => {
    this.setState({
      activeLink: category
    });
  };

  render() {
    return (
      <div>
        <p className="panel-tabs">
          <a
            className={this.state.activeLink === "cases" ? "is-active" : ""}
            onClick={() => this.setActiveCategory("cases")}
          >
            <strong>Total cases</strong>
          </a>
          <a
            className={this.state.activeLink === "recovered" ? "is-active" : ""}
            onClick={() => this.setActiveCategory("recovered")}
          >
            <strong>Cured</strong>
          </a>
          <a
            className={this.state.activeLink === "deaths" ? "is-active" : ""}
            onClick={() => this.setActiveCategory("deaths")}
          >
            <strong>Deaths</strong>
          </a>
        </p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input
              className="input is-dark"
              type="text"
              placeholder="Search"
              onChange={this.props.handleInput}
            />
            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <div className="countries-list">
          <CountriesList
            modifier={this.state.activeLink}
            data={this.props.data}
          />
        </div>
      </div>
    );
  }
}

export default Panel;
