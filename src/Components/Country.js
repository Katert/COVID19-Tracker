import React from "react";
import { Link } from "react-router-dom";

const Country = props => {

  return (
    <li className="list-item">
      <Link to={props.name.toLowerCase()} className="panel-block">
        <span className="panel-icon">
          <img src={props.flag} alt=""></img>
        </span>
        <div>
          <strong>{props.name}:</strong><div className="cases">{props.cases}</div>
        </div>
      </Link>
    </li>
  );
};

export default Country;
