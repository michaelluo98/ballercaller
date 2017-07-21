import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
//import {bindActionCreators} from 'redux';
//import * as profileActions from '../../actions/profileActions';
import profileApi from '../../api/profileApi';

//import styles from '../styles/profileStyle';
import RaisedButton from 'material-ui/RaisedButton';


class FriendButton extends Component {
	//props: friendId, friendshipStatus, currentUser, currentUserId
	constructor(props, context) {
		super(props, context)

		this.state = {
			button: this.props.friendshipStatus || 'requested'
		}

		this.acceptRequest = this.acceptRequest.bind(this); 
		this.rejectRequest = this.rejectRequest.bind(this);
	}

	acceptRequest() {
		profileApi.acceptRequest(this.props.currentUserId, this.props.friendId);
		return this.setState({button: 'accepted'})
	}

	rejectRequest() {
		profileApi.rejectRequest(this.props.currentUserId, this.props.friendId);
		return this.setState({button: 'rejected'})
	}

	render() {
		if (this.state.button === 'requested') {
			return (
				<div style={{display: 'inline', marginTop: '10px'}}>
					<RaisedButton 
						label="Accept" 
						primary={true} 
						style={{marginRight: '10px', height: '24px'}}
						buttonStyle={{height: '24px', lineHeight: '24px'}}
						onTouchTap={this.acceptRequest}
					/>
					<RaisedButton 
						label="Decline" 
						secondary={true} 
						style={{height: '24px'}}
						buttonStyle={{height: '24px', lineHeight: '24px'}} 
						onTouchTap={this.rejectRequest}
					/>
				</div>
			)
		}
		else if (this.state.button === 'accepted') {
			return (
				<div style={{display: 'inline', marginTop: '10px'}}>
					<RaisedButton 
						label="Accepted" 
						primary={true} 
						style={{marginRight: '10px', height: '24px'}}
						buttonStyle={{height: '24px', lineHeight: '24px'}}
					/>
				</div>
			)
		}
		else if (this.state.button === 'rejected') {
			return (
				<div style={{display: 'inline', marginTop: '10px'}}>
					<RaisedButton 
						label="rejected" 
						primary={true} 
						style={{marginRight: '10px', height: '24px'}}
						buttonStyle={{height: '24px', lineHeight: '24px'}}
					/>
				</div>
			)
		}
		
	}
}


function mapStateToProps(state, ownProps) {
	const {currentUser, currentUserId} = state.session;
	return {
		currentUser, 
		currentUserId
	}
}

/*function mapDispatchToProps(dispatch) {
	return {

	}
}*/

export default connect(mapStateToProps, null)(FriendButton);
