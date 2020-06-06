import React from "react";
import Country from "./Country";

const CountriesList = props => {
  const results = props.data;
  let countries;

  if (props.modifier === "cases") {
    countries = results.map((country, index) => (
      <Country
        key={index}
        id={country.countryInfo._id}
        flag={country.countryInfo.flag}
        name={country.country}
        cases={country.cases}
      />
    ));
  } else if (props.modifier === "recovered") {
    countries = results.map((country, index) => (
      <Country
        key={index}
        id={country.countryInfo._id}
        flag={country.countryInfo.flag}
        name={country.country}
        cases={country.recovered}

      />
    ));
  } else if (props.modifier === "deaths") {
    countries = results.map((country, index) => (
      <Country
        key={index}
        id={country.countryInfo._id}
        flag={country.countryInfo.flag}
        name={country.country}
        cases={country.deaths}
      />
    ));
  }

  return <ul className="list">{countries}</ul>;
};

export default CountriesList;
