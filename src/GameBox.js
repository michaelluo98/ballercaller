import React, { Component } from 'react';
import GameList from './GameList';
import Paper from 'material-ui/Paper';
const PropTypes = require('prop-types');

const style = {
    height: 420,
    width: 420,
    marginLeft: 20,
	marginTop: 10,
    textAlign: 'center',
    display: 'inline-block',

};

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



const GameMap = () => (
    <div>
      <Paper style={style} zDepth={2} circle={true} />
    </div>
);


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
