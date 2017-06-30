import React from 'react';
import PropTypes from 'prop-types';

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

export default SelectMapView;
