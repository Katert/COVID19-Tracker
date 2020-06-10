import React from "react";
import { render } from "react-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const MapViewer = props => {

  return (
    <article className="mapviewer tile is-child box">
      <p className="title is-4">Map</p>
      
        <Map center={[48.922499, -33.000396]} zoom={2}>
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />

          {props.data.map((country, index) => (
            <Marker key={index} position={[country.countryInfo.lat, country.countryInfo.long]}></Marker>
          ))}

        </Map>
      
    </article>
  );

};

export default MapViewer;
