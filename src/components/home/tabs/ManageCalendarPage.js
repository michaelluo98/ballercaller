import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import sessionApi from '../../../api/sessionApi';
import * as gameActions from '../../../actions/gameActions';
import Paper from 'material-ui/Paper';
import InfiniteCalendar, {
	Calendar,
	defaultMultipleDateInterpolation,
	withMultipleDates,
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once

const MultipleDatesCalendar = withMultipleDates(Calendar);

// Render the Calendar
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 30);

const style = {
	position: 'fixed',
	top: '100px',
	right: '45px'
}

class gameCalendar extends Component {
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
		}
	}

  render() {
		//Object.keys(this.props.currentUser).length
		if (this.props.currentUser && 
			Object.keys(this.props.currentUser).length !== 0 && 
			this.state.userGames.length === 0) {

      this.getCurrentUserGames()
			  .then(games => {
					const dates = games.map(game => {
						const gameTime = new Date(game.start_time);
						const year = gameTime.getUTCFullYear();
						const month = gameTime.getMonth();
						const day = gameTime.getDate();
						const parsedDate = new Date(year, month, day);
						return parsedDate;
					})
					this.setState({userGames: dates})
				})
		}
    return (
			<Paper style={style} zDepth={1} rounded={false}>
				<InfiniteCalendar
					Component={MultipleDatesCalendar}
					width={470}
					height={230}
					min={lastWeek}
					displayOptions={{
						showHeader: false
					}}
					selected={this.state.userGames}
					interpolateSelection={defaultMultipleDateInterpolation}
				/>
			</Paper>
    )
  }
}

function mapStateToProps(state, ownProps) {
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

export default connect(mapStateToProps, mapDispatchToProps)(gameCalendar);
