import React from "react";
import { Map, CircleMarker, Popup, TileLayer } from "react-leaflet";

const MapViewer = props => {

  return (
    <article className="mapviewer tile is-child box">
      <p className="title is-4">Active cases</p>
      
        <Map center={[26.534480, 13.662376]} zoom={2} minZoom={1}>
          <TileLayer noWrap={true} url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"/>

          {props.data.map((country, index) => (
            <CircleMarker className="pulse" key={index} center={[country.countryInfo.lat, country.countryInfo.long]} color="red" radius={country.active / 15000}>
              <Popup>
                Country: {country.country}<br/>
                Active cases: {country.active}
              </Popup>
            </CircleMarker>
          ))}

        </Map>
      
    </article>
  );

};

export default MapViewer;
