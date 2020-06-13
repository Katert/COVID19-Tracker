import React, { Component } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [{ name: "January", uv: 1000, pv: 2400, amt: 2400 }];

class Graph extends Component {
  render() {
    return (
      <article className="tile is-child box">
        <p className="title is-4">Global graph</p>

        <LineChart width={600} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
        
      </article>
    );
  }
}

export default Graph;
