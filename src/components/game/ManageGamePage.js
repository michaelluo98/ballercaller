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
		height: '450px', /* as the half of the width */
		borderTopLeftRadius: '450px',
		borderTopRightRadius: '450px',
		border: '5px solid black',
		borderBottom: 0,
		position: 'fixed',
		bottom: '40px',
		left: '75px'
	},
	test: {
		border: '5px solid black',
		position: 'fixed',
		left: '50%'
	}
}

class ManageGamePage extends React.Component {
	render () {
		return (
			<div>
				<div style={styles.test}></div>
				<GameForm />
				<div style={styles.threePointLine}></div>
				<AddPlayerButtons />
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
