import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import axios from "axios";

// Component imports
import Header from "./Components/Header";
import Panel from "./Components/Panel";
import CountriesList from "./Components/CountriesList";
import Map from "./Components/Map";
import Graph from "./Components/Graph";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://corona.lmao.ninja/v2/countries?yesterday&sort")
      .then(response => {
        this.setState({
          countries: response.data
        });
        console.log(response.data)
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="app">
          <div id="tiles" className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child box">
              <article className="panel is-black">
                <Panel />
                <div className="countries-list">
                <CountriesList data={this.state.countries}/>
                </div>
                </article>
              </div>
            </div>
            <div className="tile is-parent is-vertical">
              <Map />
              <Graph />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
