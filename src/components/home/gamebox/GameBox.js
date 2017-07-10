import React, { Component } from 'react';
import GameList from './GameList';
import GameMap from './GameMap';
import SelectMapView from './SelectMapView';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../../../actions/gameActions';

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

  render() {
  	return (
  	  <div className="game-box">
    	  {this.state.selectedMapView === 'Map' ?
				<GameMap
					games={this.props.games}
					courts={this.props.courts}
				/> :
				<GameList
					games={this.props.games.slice(0,6)}
					courts={this.props.courts.slice(0,6)}
					listGame={true}
					/> }
    		<SelectMapView
    			selectedMapView = {this.state.selectedMapView}
    			onSelect = {this.updateMapView} />

  	  </div>
  	)
  }
}

function mapStateToProps(state, ownProps) {
  const {games, courts} = state.games;
	const waitingGames = games.filter(game => game.status === 'waiting');
  return {
		games: waitingGames,
		courts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gameActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBox);
