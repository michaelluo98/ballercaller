import React from 'react';
//import {PropTypes} from 'prop-types'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../../actions/gameActions';
import GameForm from './GameForm';
import AddPlayerButtons from './AddPlayerButtons';

const styles = {
	threePointLine: {
		width: '1000px',
		height: '480px', /* as the half of the width */
		borderTopLeftRadius: '450px',
		borderTopRightRadius: '450px',
		border: '5px solid black',
		borderBottom: 0,
		position: 'fixed',
		bottom: '0px',
		left: '75px'
	},
}

class ManageGamePage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			game: Object.assign({}, this.props.game),
			errors: {}, 
		}
		this.updateGameState = this.updateGameState.bind(this);
		this.saveGame = this.saveGame.bind(this);
	}

	updateGameState(event, name='', value = 0) {
		let game = this.state.game;
		//console.log('inside updateGameState', event.target.name);
		//console.log('inside updateGameState', event.target.value);
		if (name === '' && value === 0) {
			const field = event.target.name;
			game[field] = event.target.value;
		}
		else if (name.class === undefined) {
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
	}

	render () {
		return (
			<div>
				<GameForm
					game={this.state.game}
					errors={this.state.game}
					onSave={this.saveGame}
					onChange={this.updateGameState}/>
				<div style={styles.threePointLine}></div>
				<AddPlayerButtons />
			</div>
		);
	}
}

ManageGamePage.propTypes = {

};

function mapStateToProps(state, ownProps) {
	let game = {game_mod_id: '', name: '', mode: 'threes', start_time: '',
							extra_info: '', court_id: '', setting: 'false'};
	return {
		game: game
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(gameActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageGamePage);
