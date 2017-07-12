import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Map from './GoogleMap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../../../actions/gameActions';

const mapStyle = {
    height: '490px',
    width: '550px',
    marginLeft: '40px',
 	  marginTop: '10px',
    textAlign: 'center',
    display: 'absolute',
};

class GameMap extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			courts: []
		}
		this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.renderMarkers = this.renderMarkers.bind(this)
	}

  renderMarkers() {
    return this.props.courts.map((court, index) => {
      let location = {};
      let coordinates = {};
      coordinates.lat = court.latitude;
      coordinates.lng = court.longitude;
      location.position = coordinates;
      location.key = index;
      location.courtId = court.id;
      location.defaultAnimation = 2;
      // console.log('court', index, court.name, court.longitude, court.latitude);
      return location;
    })
  }

	handleMarkerClick(gameId) {
		this.props.history.push(`/game/${gameId}`)
	}

  render() {

    return (
      <div>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBXkW7lS0WW1hllJ_lbRgD2kcuDqeReTXU"
          loadingElement={
            <div style={{ height: `100%` }}>
            </div>
          }
					center={{ lat: 49.2564956, lng: -123.105743 }}
          markers={this.renderMarkers()}
					onMarkerClick={this.handleMarkerClick}
          containerElement={<Paper style={mapStyle} zDepth={2} circle={true} />}
          mapElement={<div
                      style={{ height: `100%`, borderRadius: '50%' }}>
                      </div>}
        />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(gameActions, dispatch)
	}
}

export default connect(null, mapDispatchToProps)(GameMap);
