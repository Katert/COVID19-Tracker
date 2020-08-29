import React from "react";
import { Map, Circle, Popup, TileLayer } from "react-leaflet";

const MapViewer = (props) => {
  return (

    <article className="panel is-black">
      <p className="panel-heading">Map</p>
      <div className="panel-block">
      <Map center={[26.53448, 13.662376]} zoom={2} minZoom={2}>
      <TileLayer
        url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=Er9ofBREDSyyRYhMr443VkEcBwTP2bRNipwAA4TQMBmiSxuz5mkd9hV7fg7KSEIr"
      />

      {props.data.map((country, index) => (
        <Circle
          className="pulse"
          key={index}
          center={[country.countryInfo.lat, country.countryInfo.long]}
          color="rgb(53, 173, 93)"
          radius={country.active / 1.5}
        >
          <Popup>
            <u>{country.country}</u><br />
            Active cases: {country.active}
          </Popup>
        </Circle>
      ))}
    </Map>
      </div>
    </article>

  );
};

export default MapViewer;
