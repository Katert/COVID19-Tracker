import React from "react";
import Country from "./Country";

const CountriesList = props => {
  const results = props.data;
  let countries;

  if (props.modifier === "totalCases") {
    countries = results.map((country, index) => (
      <Country
        key={index}
        id={country.countryInfo._id}
        flag={country.countryInfo.flag}
        name={country.country}
        totalCases={country.cases} // for modal
        cases={country.cases} // for panel
        todayCases={country.todayCases}
        deaths={country.deaths}
        todayDeaths={country.todayDeaths}
        recovered={country.recovered}
        active={country.active}
        critical={country.critical}
        tests={country.tests}
        lat={country.countryInfo.lat}
        long={country.countryInfo.long}
      />
    ));
  } else if (props.modifier === "recovered") {
    countries = results.map((country, index) => (
      <Country
        key={index}
        id={country.countryInfo._id}
        flag={country.countryInfo.flag}
        name={country.country}
        totalCases={country.cases} // for modal
        cases={country.recovered} // for panel
        todayCases={country.todayCases}
        deaths={country.deaths}
        todayDeaths={country.todayDeaths}
        recovered={country.recovered}
        active={country.active}
        critical={country.critical}
        tests={country.tests}
        lat={country.countryInfo.lat}
        long={country.countryInfo.long}
      />
    ));
  } else if (props.modifier === "deaths") {
    countries = results.map((country, index) => (
      <Country
        key={index}
        id={country.countryInfo._id}
        flag={country.countryInfo.flag}
        name={country.country}
        totalCases={country.cases} // for modal
        cases={country.deaths} // for panel
        todayCases={country.todayCases}
        deaths={country.deaths}
        todayDeaths={country.todayDeaths}
        recovered={country.recovered}
        active={country.active}
        critical={country.critical}
        tests={country.tests}
        lat={country.countryInfo.lat}
        long={country.countryInfo.long}
      />
    ));
  }

  return <ul className="list">{countries}</ul>;
};

export default CountriesList;
