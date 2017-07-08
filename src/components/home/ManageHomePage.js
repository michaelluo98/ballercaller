import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as gameActions from '../../actions/gameActions';
import SearchForm from './searchform/SearchForm';
import GameBox from './gamebox/GameBox';
import Calendar from './tabs/ManageCalendarPage';
import GameList from './gamebox/GameList'; 
import Paper from 'material-ui/Paper';

const findGameStyle = {
    height: 175,
    width: 470,
    margin: 30,
  	marginLeft: 60,
    textAlign: 'center',
    display: 'inline-block',
		marginTop: 330
};

class ManageHomePage extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			game: Object.assign({}, this.props.game), 
		}
		this.updateGameState = this.updateGameState.bind(this);
		this.saveGame = this.saveGame.bind(this);
		this.findGame = this.findGame.bind(this);
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
				console.log(time);
				console.log(name)
				game['start_time'] = game['start_time'].concat(name.toString().slice(15));
			}
		}
		else {
			game[name] = value;
		}

		console.log(game);
		return this.setState({game: game});
	}

	saveGame(event) {
		event.preventDefault();
		this.props.actions.findGames(this.state.game)
	}

	findGame() {
		if (this.props.foundGames.length === 0) {
			return <SearchForm
							onChange={this.updateGameState}
							onSave={this.saveGame}
							courts={this.props.allCourts}
						 />
		}
		else {
			return <Paper style={findGameStyle} zDepth={2} rounded={false}>
								<GameList 
									games={this.props.foundGames.slice(0,2)}
									courts={this.props.foundCourts.slice(0,2)}
									listGame={false}
								/>
							</Paper>
		}
	}

	render() {
		return (
			<div>
				<GameBox />
				{this.findGame()}
				<Calendar />
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	let game = {name: '', mode: 'threes', start_time: '',
							court_id: '', setting: 'false'};
	const {allCourts, foundGames, foundCourts} = state.games
	return {
		game: game,
		allCourts, 
		foundGames, 
		foundCourts
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(gameActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageHomePage);
