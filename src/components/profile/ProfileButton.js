import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux';
import * as profileActions from '../../actions/profileActions';
import profileApi from '../../api/profileApi';

import styles from '../styles/profileStyle';
import RaisedButton from 'material-ui/RaisedButton';

class ProfileButton extends Component {
	constructor(props, context) {
		super(props, context)

		this.sendRequest = this.sendRequest.bind(this);
	}

	async sendRequest() {
		const newFriendship = profileApi.sendRequest(this.props.currentUserId, 
																								this.props.profileUserId);
		const newFriendshipStatus = await newFriendship.then(res => res.status)
		this.props.profileActions.updateFriendshipStatus('requested')

		//console.log('newFriendshipStatus: ', newFriendshipStatus);
	}

	render() {
		if (this.props.isCurrentUser) {
			return (
				<RaisedButton 
					label="Edit" 
					style={styles.editButton} 
					labelColor='rgb(0, 188, 212)'/> 
			)
		}
		else if (this.props.friendshipStatus === 'none') {
			return (
				<RaisedButton 
					label="Add Friend" 
					style={styles.editButton} 
					labelColor='rgb(0, 188, 212)'
					onTouchTap={this.sendRequest}
				/> 
			)
		}
		else if (this.props.friendshipStatus === 'requested') {
			return (
				<RaisedButton 
					label="Requested" 
					style={styles.editButton} 
					labelColor='rgb(0, 188, 212)'/> 
			)
		}
		else {
			return (
				null
			)
		}
	}

}


function mapStateToProps(state, ownProps) {
	const { profileUser } = state.profile; 
	const { currentUserId } = state.session;
	return {
		profileUser, 
		currentUserId
	}
}

function mapDispatchToProps(dispatch) {
	return {
		profileActions: bindActionCreators(profileActions, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileButton);
