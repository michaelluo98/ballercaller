import React, {Component} from 'react';
//import {PropTypes} from 'prop-types'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../../actions/gameActions';
import GameForm from './GameForm';
import ShowGame from './ShowGame';
import AddPlayerButtons from './AddPlayerButtons';

const styles = {
	threePointLine: {
		width: '1000px',
		height: '480px', /* as the half of the width */
		borderTopLeftRadius: '450px',
		borderTopRightRadius: '450px',
		border: '5px solid black',
		borderBottom: 0,
		position: 'fixed', bottom: '0px', left: '75px'
	},
}

class ManageGamePage extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			game: Object.assign({}, this.props.game),
			playersOne: Object.assign({}, this.props.playersOne),
			playersTwo: Object.assign({}, this.props.playersTwo),
			errors: {},
		}
		this.updateGameState = this.updateGameState.bind(this);
		this.saveGame = this.saveGame.bind(this);
		this.updateTeamState = this.updateTeamState.bind(this);
	}

	updateGameState(event, name='', value = 0) {
		let game = this.state.game;

		if (value === 0 && typeof(name) === 'string') {
			const field = event.target.name;
			game[field] = event.target.value;
		}
		else if (typeof(name) === "object") {
			const time = name.toString().slice(16,24);
			if (time === '00:00:00') {
				game['start_time'] = name.toString().slice(0,15);
			}
			else {
				game['start_time'] = game['start_time'].concat(name.toString().slice(15));
			}
		}
		else {
			game[name] = value;
		}
		return this.setState({game: game});
	}

	updateTeamState(player, teamNum) {
		let team;
		if (teamNum === 1) {
			team = this.state.playersOne
			team.push(player)
			return this.setState({})
		}
		else {
			team = this.state.playersTwo
			team.push(player)
			return this.setState({})
		}

	}

	saveGame(event) {
		event.preventDefault();
		const game = Object.assign({}, this.state.game,
			{game_mod_id: this.props.currentUser.id}, 
			{playersOne: this.state.playersOne}, 
			{playersTwo: this.state.playersTwo})
		this.props.actions.saveGame(game);
		const nextGameId = this.props.lastGameId + 1;
		this.props.history.push(`/game/${nextGameId}`)
	}

	render () {
		return (
			<div>
				{this.props.gameId === undefined && this.props.playersOne.length > 0
						&& this.props.actions.clearPlayers()}
				{this.props.gameId && this.props.playersOne.length === 0 
						&& this.props.actions.loadGames()}
						{console.log('showGame in ManageHomePage', this.props.showGame)}
						{console.log('showGameBoolVal in ManageHomePage', !!this.props.showGame)}
				{this.props.showGame && this.props.showGame.id && this.props.playersOne.length === 0  
				  	&& this.props.actions.loadPlayers(this.props.gameId)}

				{this.props.showGame && this.props.showGame.name ?
						<ShowGame game={this.props.showGame}/> :
						<GameForm
							game={this.state.game}
							errors={this.state.game}
							onSave={this.saveGame}
							onChange={this.updateGameState}
							courts={this.props.allCourts}
						/>
				}
				<div style={styles.threePointLine}></div>
				<AddPlayerButtons
					currentUser={this.props.currentUser}
					playersOne={this.props.playersOne}
					playersTwo={this.props.playersTwo}
					handleChange={this.updateTeamState}/>
			</div>
		);
	}
}

function getGameById(games, id) {
	const game = games.filter(game => game.id.toString() === id);
	if (game) return game[0];
	return null;
}

function mapStateToProps(state, ownProps) {
	const gameId = ownProps.match.params.id;
	let game = {game_mod_id: '', name: '', mode: 'threes', start_time: '',
							extra_info: '', court_id: '', setting: 'false'};
	let showGame = {};
	const {currentUser} = state.session;
	const {lastGameId, playersOne, playersTwo, games} = state.games;
	if (gameId && state.games.games.length > 0) {
		showGame = getGameById(state.games.games, gameId);
	}
	console.log('playersOne in mapStateToProps: ', playersOne);
	console.log('playersTwo in mapStateToProps: ', playersTwo);
	return {
		game: game,
		games,
		allCourts: state.games.allCourts,
		showGame,
		currentUser,
		lastGameId,
		playersOne,
		playersTwo,
		gameId
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(gameActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageGamePage);
