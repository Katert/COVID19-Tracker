import React, { Component } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";
import {setActiveCategory} from "./Panel";

const data = [
  { name: "Jan", uv: 5000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 2000, pv: 2400, amt: 2400 },
  { name: "Mar", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Apr", uv: 8000, pv: 2400, amt: 2400 },
  { name: "May", uv: 5000, pv: 2400, amt: 2400 },
  { name: "June", uv: 3000, pv: 2400, amt: 2400 },
  { name: "July", uv: 7000, pv: 2400, amt: 2400 },
  { name: "Aug", uv: 1000, pv: 2400, amt: 2400 },
  { name: "Sept", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Oct", uv: 2000, pv: 2400, amt: 2400 },
  { name: "Nov", uv: 7000, pv: 2400, amt: 2400 },
  { name: "Dec", uv: 9000, pv: 2400, amt: 2400 },
];

class Graph extends Component {

  constructor() {
    super();
    this.state = {
      activeLink: 'activeCases'
    }
  }

  setActiveCategory = (category) => {
    this.setState({
      activeLink: category,
    });
  };

  render() {
    return (
      <motion.article
        id="graph"
        className="tile is-child box"
        initial={{ opacity: 0, x: 250 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* <p className="title is-4">Statistics</p> */}

        <article className="panel is-black">
        <p className="panel-heading">Graph</p>

          <p className="panel-tabs">
          <a
            className={
              this.state.activeLink === "activeCases" ? "is-active" : ""
            }
            onClick={() => this.setActiveCategory("activeCases")}
          >
            Active cases
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
            <LineChart className="graph" width={850} height={400} data={data}>
              <Line type="monotone" dataKey="uv" stroke="#000000" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
          </div>
        </article>
      </motion.article>
    );
  }
}

export default Graph;
