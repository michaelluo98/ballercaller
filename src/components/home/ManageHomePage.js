import React, {Component} from 'react';
import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux';
// import * as gameActions from ''
import SearchForm from './searchform/SearchForm';
import GameBox from './gamebox/GameBox';
import Calendar from './tabs/ManageCalendarPage';


class ManageHomePage extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			game: Object.assign({}, this.props.game)
		}
		this.updateGameState = this.updateGameState.bind(this);
		this.saveGame = this.saveGame.bind(this);

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
		this.props.actions.saveGame(this.state.game);
		this.props.history.push(`/${this.state.game.id}`)
	}

	render() {
		return (
			<div>
				<GameBox />
				<SearchForm
					onChange={this.updateGameState}
					onSave={this.saveGame}
					courts={this.props.allCourts}/>
				<Calendar />
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	let game = {name: '', mode: 'threes', start_time: '',
							court_id: '', setting: 'false'};
	const {allCourts} = state.games
	return {
		game: game,
		allCourts
	}
}

//function mapDispatchToProps(dispatch) {
//}

export default connect(mapStateToProps)(ManageHomePage);
