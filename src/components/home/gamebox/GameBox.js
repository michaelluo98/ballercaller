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
					courts={this.props.allCourts}
				/> :
				<div style={{maxHeight: '490px', overflow: 'auto', paddingTop: '10px'}}>
					<GameList
						games={this.props.games}
						courts={this.props.courts}
						creators={this.props.creators}
						listGame={true}
						handleOpen={this.props.handleOpen}
						handleOpenModal={this.props.handleOpenModal}
						/>
				</div> }
    		<SelectMapView
    			selectedMapView = {this.state.selectedMapView}
    			onSelect = {this.updateMapView} />

  	  </div>
  	)
  }
}

function mapStateToProps(state, ownProps) {
  const {games, courts, creators, allCourts} = state.games;
	const waitingGames = games.filter(game => game.status === 'waiting');
  return {
		games: waitingGames,
		courts, 
		allCourts,
		creators
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gameActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBox);
