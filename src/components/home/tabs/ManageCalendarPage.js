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
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

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
		if (this.props.currentUser && this.state.userGames.length === 0) {
      this.getCurrentUserGames()
			  .then(games => {
					const dates = games.map(game => {
						/*const gameTime = new Date(game.start_time);
						const year = gameTime.getUTCFullYear();
						const month = gameTime.getMonth() + 1;
						const day = gameTime.getDate();
						const parsedDate = new Date(year, month, day);
						[>console.log(game.start_time);
						console.log(gameTime);
						console.log(gameTime.getDate());
						console.log(gameTime.getMonth());
						console.log(gameTime.getUTCFullYear());<]
						return parsedDate;*/
						return game.start_time;
					})
					this.setState({userGames: dates})
					console.log(this.state.userGames)
				})
		}
		// {this.props.currentUser && console.log(this.getCurrentUserGames())}
					/*component={withMultipleDates(Calendar)}
					interpolateSelection={defaultMultipleDateInterpolation}*/
    return (
			<Paper style={style} zDepth={1} rounded={false}>
				{console.log('currentUser: ', this.props.currentUser)}
				<InfiniteCalendar
					width={470}
					height={230}
					minDate={lastWeek}
					displayOptions={{
						layout: 'landscape',
						showHeader: false
					}}
					selected={null}
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

export default connect(mapStateToProps, mapDispatchToProps)(gameCalendar);
