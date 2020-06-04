import React from "react";
import Country from "./Country";

const CountriesList = props => {
  const results = props.data;
  let countries;

  if (props.modifier === "total") {
    countries = results.map((country) => (
      <Country
        key={country.countryInfo._id}
        id={country.countryInfo._id}
        flag={country.countryInfo.flag}
        name={country.country}
        cases={country.cases}
      />
    ));
  } else if (props.modifier === "cured") {
    countries = results.map((country) => (
      <Country
        key={country.countryInfo._id}
        id={country.countryInfo._id}
        flag={country.countryInfo.flag}
        name={country.country}
        cases={country.recovered}

      />
    ));
  } else if (props.modifier === "deaths") {
    countries = results.map((country) => (
      <Country
        key={country.countryInfo._id}
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
