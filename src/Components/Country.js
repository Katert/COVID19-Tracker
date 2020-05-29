import React from "react";
import { Link } from "react-router-dom";

const Country = (props) => {

    return (
        <li>
        <Link to="test" className="panel-block is-active">
          <span className="panel-icon">
            <img src={props.flag} alt=""></img>
          </span>
          <div>{props.name}: <div className="cases">{props.cases}</div></div>
        </Link>
        </li>
    );
 
};

export default Country;