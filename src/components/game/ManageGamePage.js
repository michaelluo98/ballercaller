import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../../actions/gameActions';
import GameForm from './GameForm';

const styles = {
	threePointLine: {
		width: '1000px',
		height: '450px', /* as the half of the width */
		borderTopLeftRadius: '450px',
		borderTopRightRadius: '450px',
		border: '5px solid black',
		borderBottom: 0,
		position: 'fixed',
		bottom: '40px',
		left: '75px'
	}
}

class ManageGamePage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render () {
		return (
			<div>
				<GameForm />
				<div style={styles.threePointLine}></div>
			</div>
		);
	}
}

ManageGamePage.propTypes = {

};

function mapStateToProps(state, ownProps) {
	return {
		state: state
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(gameActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageGamePage);
