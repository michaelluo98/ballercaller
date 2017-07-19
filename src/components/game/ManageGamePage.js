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
		//needfix
		this.props.sessionActions.getCurrentUser(this.props.currentUserId);

		this.state = {
			game: Object.assign({}, this.props.game),
			playersOne: Array.from(this.props.playersTwo),
			playersTwo: Array.from(this.props.playersTwo),
			createGame: true,
			showCreator: {},
			showCourt: {}
		}
		this.updateGameState = this.updateGameState.bind(this);
		this.saveGame = this.saveGame.bind(this);
		this.updateTeamState = this.updateTeamState.bind(this);
		this.updatePageState = this.updatePageState.bind(this);
	}

	componentDidMount() {
		console.log('currentUserId in componentDidMount: ', this.props.currentUserId)
		if (this.props.currentUserId) {
			this.props.sessionActions.getFavorites(this.props.currentUserId);
		}
	}

	componentDidUpdate() {
		const players = Array.from(this.props.playersOne).filter((e) => {
			return e.id === this.props.currentUserId
		})
		const realPlayersOne = players.length === 0 ?
		//needfix
			Array.from(this.props.playersOne).concat(this.props.currentUser) :
			Array.from(this.props.playersOne)

		if (players.length === 0) 
		this.setState({playersOne: realPlayersOne})
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
		if (teamNum === 1) {
			let team = this.state.playersOne
			console.log('setting teamone State')
			team[playerNum] = player;
			this.props.sessionActions.removeFromFavorites(player);
			return this.setState({playersOne: team})
		}
		else {
			let team = this.state.playersTwo
			team[playerNum] = player;
			console.log('setting teamtwo State')
			this.props.sessionActions.removeFromFavorites(player);
			return this.setState({playersTwo: team})
		}
	}

	saveGame = async (event) => {
		event.preventDefault();
		const game = Object.assign({}, this.state.game,
			{game_mod_id: this.props.currentUserId})
		const playersOne = Object.assign({}, this.state.playersOne);
		const playersTwo = Object.assign({}, this.state.playersTwo);
		await this.props.actions.saveGame(game, playersOne, playersTwo);
		const nextGameId = this.props.lastGameId + 1;
		this.props.history.push(`/game/${nextGameId}`)
	}

	updatePageState() {
		// showgame -> creategame
		if (this.props.gameId === undefined && this.props.playersOne &&
				this.props.playersOne.length > 0 && this.state.createGame) {
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

				{console.log('showGame:', this.props.showGame)}
				{this.props.showGame && this.props.showGame.name ?
						<ShowGame
							game={this.props.showGame}
							court={this.props.showCourt}
							creator={this.props.showCreator}
						/> :
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
					playersOne={this.state.playersOne}
					playersTwo={this.state.playersTwo}
					handleChange={this.updateTeamState}
					favorites={this.props.favorites} />
			</div>
		);
	}
}

function getById(games, allCourts, allCreators, id) {
	const gameArr = games.filter(game => game.id.toString() === id);
	if (gameArr.length === 1 ) {
		const game = gameArr[0]
		const courts = allCourts.filter((court) => {
			return court.id === game.court_id
		})
		const creators = allCreators.filter((creator) => {
			return creator.id === game.game_mod_id
		})
		return [game, courts[0], creators[0]];
	}
	return [];
}


function mapStateToProps (state, ownProps) {
	const gameId = ownProps.match.params.id;
	let game = {game_mod_id: '', name: '', mode: 'threes', start_time: '',
							extra_info: '', court_id: '', setting: 'false'};
	const {currentUser, favorites, currentUserId} = state.session;
	const {lastGameId, playersOne, playersTwo, games, creators, courts} = state.games;


	let showGames = [];
	if (gameId && state.games.games.length > 0 &&
		state.games.courts.length > 0 && state.games.creators.length > 0) {
		showGames = getById(state.games.games, state.games.courts, state.games.creators, gameId);
	}

	return {
		game: game,
		games,
		creators,
		courts,
		allCourts: state.games.allCourts,
		showGame: showGames[0],
		showCourt: showGames[1],
		showCreator: showGames[2],
		currentUser,
		currentUserId,
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
