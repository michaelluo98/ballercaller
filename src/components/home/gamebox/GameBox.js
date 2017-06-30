import React, { Component } from 'react';
import GameList from './GameList';
import GameMap from './GameMap';
const PropTypes = require('prop-types');


function SelectMapView(props) {
  var mapViews = ['Map', 'List'];
  return (
	<ul className="map-views">
  	{mapViews.map(function(mapView) {
  	  return (
    		<li
      		style={mapView === props.selectedMapView ? { color: '#d0021b' } : null}
      		onClick={props.onSelect.bind(null, mapView)}
      		key={mapView}>
      		{mapView}
    		</li>
  	  )
  	  }, this)
  	}
	</ul>
  )
}

SelectMapView.propTypes = {
	selectedMapView: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
}

class GameBox extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  selectedMapView: 'Map'
  	};
  	this.updateMapView = this.updateMapView.bind(this);
  }

  componentDidMount() {
  	this.updateMapView(this.state.selectedMapView);
  }

  updateMapView(mapView) {
  	this.setState(function() {
  	  return {
  		selectedMapView: mapView
  	  }
  	});
  }

  render() {
  	return (
  	  <div className="game-box">
  	  {this.state.selectedMapView === 'Map' ?
  	  <GameMap /> :
  	  <GameList /> }
  		<SelectMapView
  			selectedMapView = {this.state.selectedMapView}
  			onSelect = {this.updateMapView} />
  	  </div>
  	)
  }
}


export default GameBox;
