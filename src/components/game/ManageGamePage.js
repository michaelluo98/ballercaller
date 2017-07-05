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
			errors: {}
		}
		this.updateGameState = this.updateGameState.bind(this);
		this.saveGame = this.saveGame.bind(this);
	}

	updateGameState(event) {
		const field = event.target.name; 
		let game = this.state.game;
		game[field] = event.target.value; 
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
	let game = {id: '', game_mod_id: '', name: '', mode: '', start_time: '', 
							extra_info: '', status: '', court_id: ''};
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
