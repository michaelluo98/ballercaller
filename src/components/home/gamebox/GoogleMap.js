import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap

class Map extends Component {
  render() {
    const markers = this.props.markers || [];

    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 49.2564956, lng: -123.105743 }}
      >
        {markers.map((marker, index) => (
          <Marker {...marker} />
        ))}
      </GoogleMap>
    )
  }
}

export default withScriptjs(withGoogleMap(Map));
