import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Polygon, Marker } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap

class Map extends Component {
  render() {
    const markers = this.props.markers || [];
    console.log(markers)
    return (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={this.props.center}
      >
        {markers.map((marker, index) => (
          <Marker {...marker} />
        ))}
        <Polygon />
      </GoogleMap>
    )
  }
}

export default withScriptjs(withGoogleMap(Map));
