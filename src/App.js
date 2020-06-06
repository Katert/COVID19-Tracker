import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import axios from "axios";

// Component imports
import Header from "./Components/Header";
import Panel from "./Components/Panel";
import MapViewer from "./Components/MapViewer";
import Graph from "./Components/Graph";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      searchCountry: '',
    };
  }

  handleInput = (e) => {
    this.setState({ searchCountry: e.target.value });
  };

  componentDidMount() {
    axios
      .get("https://corona.lmao.ninja/v2/countries?yesterday&sort")
      .then((response) => {
        this.setState({
          countries: response.data,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {

    // Displays countries based on user input (search field)
    let filteredCountries = this.state.countries.filter((country) => {
      return country.country.toLowerCase().includes(this.state.searchCountry.toLowerCase())
    })

    return (
      <BrowserRouter>
        <Header />
        <div className="app">
          <div id="tiles" className="tile is-ancestor">
            <div id="search-tool" className="tile is-4 is-vertical is-parent">
              <article className="tile is-child box">
                <p className="title is-4">Countries</p>
                <article className="panel">
                  <Panel handleInput={this.handleInput} data={filteredCountries} />
                </article>
              </article>
            </div>
            <div className="tile is-parent is-vertical">
              <MapViewer data={this.state.countries} />
              <Graph />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
