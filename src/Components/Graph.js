import React, { Component } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

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
  render() {
    return (
      <motion.article
        className="tile is-child box"
        initial={{ opacity: 0, x: 250 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="title is-4">Global statistics (confirmed cases)</p>

        {/* <LineChart className="graph" width={850} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#000000" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart> */}
        <h1>Coming soon</h1>
      </motion.article>
    );
  }
}

export default Graph;
