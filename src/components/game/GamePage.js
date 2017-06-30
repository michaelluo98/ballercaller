import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../../actions/gameActions';
import PropTypes from 'prop-types';

class GamePage extends React.Component {
	constructor(props, context) {
		super(props, context); 
	}

	gameRow(game, index) {
		return <div key={index}>{game.name}</div>;
	}

  render() {
    return (
			<div>
				<h1>Games</h1>			
				{this.props.games && this.props.games.map(this.gameRow)}
			</div>      
    );
  }
}
//{this.props.games.map(game => {
//return <h1>{game.name}</h1>;
//})}

GamePage.propTypes = {
	//games: PropTypes.array.isRequired, 
	actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
	return {
		games: state.games.games
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(gameActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
