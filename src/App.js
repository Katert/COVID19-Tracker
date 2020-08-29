import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion";
import "./style/css/App.css";
import axios from "axios";

// Component imports
import Header from "./Components/Header";
import Panel from "./Components/Panel";
import MapViewer from "./Components/MapViewer";
import Graph from "./Components/Graph";
import Footer from "./Components/Footer";


class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      globalStats: {},
      searchCountry: "",
    };
  }

  handleInput = (e) => {
    this.setState({ searchCountry: e.target.value });
  };

  componentDidMount() {
    setTimeout(() => {
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

    axios
      .get("https://corona.lmao.ninja/v2/all?yesterday")
      .then((response) => {
        this.setState({
          globalStats: response.data,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
    }, 1500)
  }

  render() {
    // Enables searchbar
    let filteredCountries = this.state.countries.filter((country) => {
      return country.country
        .toLowerCase()
        .includes(this.state.searchCountry.toLowerCase());
    });

    return (
      <BrowserRouter>
        <Header />
        <div className="app">
          <div id="tiles" className="tile is-ancestor">
            <div id="search-tool" className="tile is-4 is-vertical is-parent">
              <motion.article
                id="panel-tile"
                className="tile is-child box"
                initial={{ opacity: 0, x: -250 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <article className="panel is-black">
                  <p className="panel-heading">Search</p>
                  <Panel
                    handleInput={this.handleInput}
                    data={filteredCountries}
                  />
                </article>
              </motion.article>
            </div>
            <div className="tile is-parent is-vertical">
              <motion.article
                className="mapviewer tile is-child box"
                initial={{ opacity: 0, x: 250 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <MapViewer data={this.state.countries} />
              </motion.article>
              <Graph
                globalStats={this.state.globalStats}
                data={this.state.countries}
              />
            </div>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
