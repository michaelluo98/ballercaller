import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../../actions/gameActions';
import PropTypes from 'prop-types';

class GamePage extends React.Component {
	constructor(props, context) {
		super(props, context); 

		this.state = {
			games: { title: null }
		};

		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}

	onTitleChange(event) {
		const game = this.state.games; 
		game.title = event.target.value;
		this.setState({games: game});
	}

	onClickSave() {
		this.props.actions.createGame(this.state.games);
	}

	gameRow(game, index) {
		return <div key={index}>{game.title}</div>;
	}

  render() {
    return (
			<div>
				<h1>Games</h1>			
				{this.props.games.map(this.gameRow)}
				<h2>Create a Game</h2>
				<input 
					type="text"
					onChange={this.onTitleChange}
					value={this.state.games.title} />

				<input 
					type="submit"
					value="Save"
					onClick={this.onClickSave} />
			</div>      
    );
  }
}

GamePage.propTypes = {
	games: PropTypes.array.isRequired, 
	actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
	return {
		games: state.games
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(gameActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
