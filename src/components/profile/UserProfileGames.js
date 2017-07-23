import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import * as profileActions from '../../actions/profileActions'; 
import GameListRow from './GameListRow';
import styles from '../styles/profileStyle';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';


class UserProfileGames extends Component {
	/*constructor(props, context) {
		super(props, context);
	}*/

	componentWillMount() {
		this.props.profileActions.getUpcomingGames(this.props.profileUserId)
	}

	render() {
		
		return (
			<div style={{width: '50%'}}>
				{this.props.isCurrentUser ? 
					<p style={styles.listViewTitle}>Your Upcoming Games: </p> : 
					<p style={styles.listViewTitle}>Games: </p>
				}
				<Paper zDepth={1} style={styles.games}>
					{this.props.upcomingGames.length === 0 ? 
						<p style={styles.emptyText}>You have no upcoming games.</p> :
						<List>
							{this.props.upcomingGames.map((game, index) => {
								return (
									<GameListRow
										key={game.id}
										gameId={game.id}
										name={game.name}
										time={game.start_time}
										court={this.props.upcomingCourts[index].name}
										creator={this.props.upcomingCreators[index]}
										mode={game.mode}
										handleOpenModal={this.props.handleOpenModal}
									/>
								) 
							})}
						</List>
					}
				</Paper>
			</div>
		)
	}
}


function mapStateToProps(state, ownProps) {
	const { upcomingGames, upcomingCreators, upcomingCourts } = state.profile;
	return {
		upcomingGames, 
		upcomingCreators, 
		upcomingCourts
	}
}

function mapDispatchToProps(dispatch) {
	return {
		profileActions: bindActionCreators(profileActions, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileGames);
