import React, {Component} from 'react'; 
/*import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux';*/

import styles from '../styles/profileStyle';
import RaisedButton from 'material-ui/RaisedButton';

class ProfileButton extends Component {
	constructor(props, context) {
		super(props, context)

	}

	render() {
		console.log('typeof this.props.currentUser: ', typeof(this.props.friendshipStatus))
		console.log('this.props.currentUser: ', this.props.friendshipStatus)
		console.log('this.props.currentUser vs "none": ', this.props.friendshipStatus == "none")
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
					labelColor='rgb(0, 188, 212)'/> 
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

export default ProfileButton; 
