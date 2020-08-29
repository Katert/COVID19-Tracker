import React, { Component } from "react";
import CountriesList from "./CountriesList";

class Panel extends Component {
  constructor() {
    super();
    this.state = {
      activeLink: "totalCases",
    };
  }

  setActiveCategory = (category) => {
    this.setState({
      activeLink: category,
    });
  };

  render() {
    return (
      <div>
        <p className="panel-tabs">
          <a
            className={
              this.state.activeLink === "totalCases" ? "is-active" : ""
            }
            onClick={() => this.setActiveCategory("totalCases")}
          >
            Total cases
          </a>
          <a
            className={this.state.activeLink === "recovered" ? "is-active" : ""}
            onClick={() => this.setActiveCategory("recovered")}
          >
            Cured
          </a>
          <a
            className={this.state.activeLink === "deaths" ? "is-active" : ""}
            onClick={() => this.setActiveCategory("deaths")}
          >
            Deaths
          </a>
        </p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input
              className="input is-dark"
              type="text"
              placeholder="Country name"
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
