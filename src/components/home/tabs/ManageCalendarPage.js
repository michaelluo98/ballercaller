import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import sessionApi from '../../../api/sessionApi';
import * as gameActions from '../../../actions/gameActions';
import Paper from 'material-ui/Paper';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once

// Render the Calendar
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

const style = {
	position: 'fixed',
	top: '100px',
	right: '45px'
}

class Calendar extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			userGames: []
		}
		this.getUserGames = this.getUserGames.bind(this);
		this.getCurrentUserGames = this.getCurrentUserGames.bind(this);
	}

	getUserGames(userId) {
		return sessionApi.getUserGames(userId)
			.then(res => {
				return res.games;
			})
	}

	getCurrentUserGames() {
		if (this.props.currentUser) {
			return this.getUserGames(this.props.currentUser.id)
			  // .then(r => r);
				// .then(res => this.setState({userGames: res}))
		}
	}

  render() {
		//if this.props.currentUser && this.getUserGames(this.props.currentUser.id)
		// {this.props.currentUser && console.log(this.getCurrentUserGames())}
		if (this.props.currentUser && this.state.userGames.length === 0) {
      this.getCurrentUserGames()
			  .then(r => {
					console.log(r)
					this.setState({userGames: r})
					console.log(this.state)
				})
		}
		// {this.props.currentUser && console.log(this.getCurrentUserGames())}
    return (
			<Paper style={style} zDepth={1} rounded={false}>
				{console.log('currentUser: ', this.props.currentUser)}
				<InfiniteCalendar
					width={470}
					height={230}
					selected={null}
					minDate={lastWeek}
					displayOptions={{
						layout: 'landscape',
						showHeader: false
					}}
				/>
			</Paper>
    )
  }
}


/*<InfiniteCalendar
  Component={withMultipleDates(Calendar)}
	selected={[
		    new Date(2017, 6, 29),
		    new Date(),
		    new Date(2017, 7, 16)

	]}
  interpolateSelection={defaultMultipleDateInterpolation}
/>*/
function mapStateToProps(state, ownProps) {
	console.log('currentState: ', state);
	const {currentUser} = state.session;
	return {
		currentUser,
	}
};

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(gameActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
