import React from 'react'
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "../../utils/util";
import './Map.css';
import { Card } from "@material-ui/core";
const Map = ({ countries, casesType, center, zoom }) => {
  return (
    <Card className="map">
      <LeafletMap center={center} zoom={zoom} maxZoom={5} minZoom={1} worldCopyJump={true}>
        <TileLayer
          detectRetina={true}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </Card>
  )
}

export default Map;
