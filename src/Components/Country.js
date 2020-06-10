import React, { Component } from "react";
import CountryModal from "./CountryModal";

class Country extends Component {

  constructor(props){
    super(props);
    this.state = {
      isActive: false
    };
  }

  setActive() {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }

  render() {
    return (
      <li onClick={() => this.setActive()} className="list-item">
      <CountryModal 
        isActive={this.state.isActive}
        name={this.props.name}
        flag={this.props.flag}
        cases={this.props.cases}
        totalCases={this.props.totalCases}
        todayCases={this.props.todayCases}
        deaths={this.props.deaths}
        todayDeaths={this.props.todayDeaths}
        recovered={this.props.recovered}
        active={this.props.active}
        critical={this.props.critical}
        casesPerMillion={this.props.casesPerOneMillion}
        deathsPerMillion={this.props.deathsPerOneMillion}
        tests={this.props.tests}
        testsPerMillion={this.props.testsPerOneMillion}
      />
        <a className="panel-block">
          <span className="panel-icon">
            <img src={this.props.flag} alt=""></img>
          </span>
          <div>
            <strong>{this.props.name}:</strong>
            <div className="cases">{this.props.cases}</div>
          </div>
        </a>
      </li>
    );  
  }
};

export default Country;
