import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import * as profileActions from '../../actions/profileActions'; 
import styles from '../styles/profileStyle';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';


class UserHistoryGames extends Component {
	/*constructor(props, context) {
		super(props, context);
	}*/

	componentWillMount() {
		this.props.profileActions.getHistoryGames(this.props.profileUserId)
	}

	render() {
		
		return (
			<div style={{width: '50%'}}>
				<div style={{height: '30px'}}></div>
				<Paper zDepth={1} style={styles.games}>
					{this.props.historyGames.length === 0 ?
						<p style={styles.emptyText}>You have no past games.</p> :
						<List>
							{this.props.historyGames.map((game) => {
								return (
									<ListItem
										primaryText={game.name}
										rightIcon={<CommunicationChatBubble />}
										key={game.id}
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
	const { historyGames, historyCourts, historyCreators } = state.profile;
	return {
		historyGames, 
		historyCourts, 
		historyCreators
	}
}

function mapDispatchToProps(dispatch) {
	return {
		profileActions: bindActionCreators(profileActions, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHistoryGames);
