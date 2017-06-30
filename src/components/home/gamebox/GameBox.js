import React, { Component } from 'react';
import GameList from './GameList';
import GameMap from './GameMap';
import SelectMapView from './SelectMapView';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../../../actions/gameActions';
import PropTypes from 'prop-types';

class GameBox extends Component {
  constructor(props, context) {
  	super(props, context);
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

  gameRow(game, index) {
    return <div key={index}>{game.name}</div>;
  }

  render() {
  	return (
  	  <div className="game-box">
    	  {this.state.selectedMapView === 'Map' ?
    	  <GameMap games={this.props.games}/> :
    	  <GameList games={this.props.games}/> }
    		<SelectMapView
    			selectedMapView = {this.state.selectedMapView}
    			onSelect = {this.updateMapView} />

        <div>
          <h1>Games</h1>
          {console.log(this.props.games)}
          {this.props.games && this.props.games.map(this.gameRow)}
        </div>

  	  </div>
  	)
  }
}

function mapStateToProps(state, ownProps) {
  return {
    games: state.games.games
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gameActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBox);
