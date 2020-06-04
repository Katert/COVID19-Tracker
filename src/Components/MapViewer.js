import React from "react";
import { render } from "react-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const MapViewer = props => {

  const countryData = props.data;

  return (
    <article className="tile is-child box">
      <p className="title is-4">Map</p>
      
        <Map center={[48.922499, -33.000396]} zoom={3}>
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />

          {/* {countryData.countryInfo.map(country => (
            <Marker key={country.countryInfo._id} position={[country.countryInfo.lat, country.countryInfo.long]}></Marker>
          ))} */}

        </Map>
      
    </article>
  );

};

export default MapViewer;
