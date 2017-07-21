import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux';
import * as gameActions from '../../actions/gameActions';
import * as sessionActions from '../../actions/sessionActions';
import * as profileActions from '../../actions/profileActions'; 
import sessionApi from '../../api/sessionApi';
import SelectProfileView from './selectProfileView';
import UserProfileFriends from './UserProfileFriends';
import UserProfileGames from './UserProfileGames';

import styles from '../styles/profileStyle';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import jersey from '../../icons/jersey.svg';


class ProfilePage extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			selectedProfileView: 'Games', 
			userGames: []
		}

		this.getUserGames = this.getUserGames.bind(this);
		this.getCurrentUserGames = this.getCurrentUserGames.bind(this);
		this.updateProfileView = this.updateProfileView.bind(this);
	}

	getUserGames(userId) {
		return sessionApi.getUserGames(userId)
			.then(res => {
				return res.games;
			})
	}

	getCurrentUserGames() {
		if (!!this.props.currentUserId) {
			return this.getUserGames(this.props.currentUserId)
		}
	}

	componentWillMount() {
		if (!!this.props.currentUserId && this.state.userGames.length === 0) {
			this.getCurrentUserGames()
				.then(games => {this.setState({userGames: games})})
			this.props.sessionActions.getUserFriends(this.props.currentUserId)
		}
		this.props.sessionActions.getCurrentUser(this.props.currentUserId)
	}

	componentDidMount() {
		this.updateProfileView(this.state.selectedProfileView)
	}

	updateProfileView(profileView) {
		this.setState(() => { 
			return {selectedProfileView: profileView} 
		});
	}

	render() {
		return (
			<div>
				<Paper zDepth={1} style={styles.jumbotron}>
					<div style={styles.profileInfo}>
						<div style={styles.firstRow}>
							<div style={styles.userInfo}>
								<p style={styles.userTitle}>
									{this.props.currentUser.first_name} {this.props.currentUser.last_name}
								</p>
								<RaisedButton label="Edit" style={styles.editButton} labelColor='rgb(0, 188, 212)'/>
							</div>
							<div style={styles.iconContainer}>
								<svg className={`icon icon-info`} width={150} height={100} fill={'white'}>
									<use xlinkHref={`${jersey}#icon-info`} />
								</svg>
							</div>
						</div>
						<div style={styles.lineBreak}></div>
						<SelectProfileView 
							selectedProfileView={this.state.selectedProfileView}
							onSelect={this.updateProfileView}
						/>
					</div>
				</Paper>
				<div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
					{this.state.selectedProfileView === 'Games' ?
						<UserProfileGames games={this.state.userGames} /> : 
						<UserProfileFriends 
							friends={this.props.friends}
							requests={this.props.requests}
						/> }
				</div>
			</div>
		)
	}

}

function mapStateToProps(state, ownProps) {
	const profileParamsId = ownProps.match.params.id;
	console.log('profileParamsId: ', profileParamsId)
	const {currentUserId, currentUser, friends, requests} = state.session; 
	const { profileUser } = state.profile
	return {
		currentUserId, 
		currentUser, 
		friends, 
		requests, 
		profileParamsId, 
		profileUser, 
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(gameActions, dispatch), 
		sessionActions: bindActionCreators(sessionActions, dispatch), 
		profileActions: bindActionCreators(profileActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
