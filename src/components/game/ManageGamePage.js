import React, {Component} from 'react';
//import {PropTypes} from 'prop-types'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../../actions/gameActions';
import * as sessionActions from '../../actions/sessionActions';
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
			playersOne: Array.from(this.props.playersOne),
			playersTwo: Array.from(this.props.playersTwo),
			createGame: true
		}
		this.updateGameState = this.updateGameState.bind(this);
		this.saveGame = this.saveGame.bind(this);
		this.updateTeamState = this.updateTeamState.bind(this);
		this.updatePageState = this.updatePageState.bind(this);
	}

	componentDidMount() {
		console.log('currentUserId in componentDidMount: ', this.props.currentUser.id)
		if (this.props.currentUser.id) {
			this.props.sessionActions.getFavorites(this.props.currentUser.id);
		}
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

	updateTeamState(event, menuItem, index) {
		const {player, teamNum, playerNum} = menuItem.props;
		console.log('index in updateTeamState: ', index)
		if (teamNum === 1) {
			let team = this.state.playersOne
			console.log('setting teamone State')
			team[playerNum] = player;
			return this.setState({playersOne: team})
		}
		else {
			let team = this.state.playersTwo
			team[playerNum] = player;
			console.log('setting teamtwo State')
			return this.setState({playersTwo: team})
		}
	}

	saveGame = async (event) => {
		event.preventDefault();
		const game = Object.assign({}, this.state.game,
			{game_mod_id: this.props.currentUser.id})
		const playersOne = Object.assign({}, this.state.playersOne);
		const playersTwo = Object.assign({}, this.state.playersTwo);
		await this.props.actions.saveGame(game, playersOne, playersTwo);
		const nextGameId = this.props.lastGameId + 1;
		this.props.history.push(`/game/${nextGameId}`)
	}

	updatePageState() {
		// showgame -> creategame
		if (this.props.gameId === undefined && this.props.playersOne &&
				this.props.playersOne.length > 0 && this.state.createGame === false) {
			this.props.actions.clearPlayers();
			this.setState({createGame: !this.state.createGame})
		}

		// creategame -> showgame
		if (this.props.gameId && this.state.createGame &&
				this.props.playersOne.length === 0) {
			this.props.actions.loadGames();
			this.setState({createGame: !this.state.createGame})
		}

		// need to know that showGame exists and is loaded
		if (this.props.showGame && this.props.showGame.id &&
				this.props.playersOne.length === 0) {
			this.props.actions.loadPlayers(this.props.gameId)
		}
	}

	render () {
		return (
			<div>
				{this.updatePageState()}

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
					playersOne={this.state.playersOne}
					playersTwo={this.state.playersTwo}
					handleChange={this.updateTeamState}
					favorites={this.props.favorites} />
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
	const {currentUser, favorites} = state.session;
	const {lastGameId, playersOne, playersTwo, games} = state.games;
	if (gameId && state.games.games.length > 0) {
		showGame = getGameById(state.games.games, gameId);
	}
	return {
		game: game,
		games,
		allCourts: state.games.allCourts,
		showGame,
		currentUser,
		lastGameId,
		playersOne,
		playersTwo,
		gameId,
		favorites
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(gameActions, dispatch),
		sessionActions: bindActionCreators(sessionActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageGamePage);
