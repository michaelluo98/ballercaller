import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import * as profileActions from '../../actions/profileActions'; 
import styles from '../styles/profileStyle';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';


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
					<p style={styles.listViewTitle}>Your Games: </p> : 
					<p style={styles.listViewTitle}>Games: </p>
				}
				<Paper zDepth={1} style={styles.games}>
					<List>
						{this.props.upcomingGames.map((game) => {
							return (
								<ListItem
									primaryText={game.name}
									rightIcon={<CommunicationChatBubble />}
									key={game.id}
								/>
							) 
						})}
					</List>
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
