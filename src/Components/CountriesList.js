import React from 'react';
import Country from './Country';

const CountriesList = props => {

    const results = props.data;
    let countries = results.map(country => 

        <Country 
        key={country.countryInfo._id}
        id={country.countryInfo._id}
        flag={country.countryInfo.flag}
        name={country.country} 
        cases={country.cases}
        />
    );

    return (
        <ul>
            {countries}
        </ul>
    );
}

export default CountriesList;