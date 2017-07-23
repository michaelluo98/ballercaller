import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux';
import * as gameActions from '../../actions/gameActions';
import * as sessionActions from '../../actions/sessionActions';
import * as profileActions from '../../actions/profileActions'; 
import sessionApi from '../../api/sessionApi';
import SelectProfileView from './selectProfileView';
import ProfileView from './ProfileView';
import ProfileButton from './ProfileButton';

import styles from '../styles/profileStyle';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import jersey from '../../icons/jersey.svg';


class ProfilePage extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			selectedProfileView: 'Games', 
			profileGames: [],
			modalOpen: false,
		}

		this.getProfileGames = this.getProfileGames.bind(this);
		this.getProfileUserGames = this.getProfileUserGames.bind(this);
		this.updateProfileView = this.updateProfileView.bind(this);
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	handleOpenModal() {
		this.setState({modalOpen: true})
	}

	handleCloseModal() {
		this.setState({modalOpen: false})
	}

	getProfileGames(userId) {
		return sessionApi.getUserGames(userId)
			.then(res => {
				return res.games;
			})
	}

	getProfileUserGames() {
		if (!!this.props.profileParamsId) {
			return this.getProfileGames(this.props.profileParamsId)
		}
	}

	componentWillMount() {
		if (!!this.props.currentUserId && !!this.props.profileParamsId && this.state.profileGames.length === 0) {
			this.getProfileUserGames()
				.then(games => {this.setState({profileGames: games})})
			this.props.profileActions.getProfileFriends(this.props.profileParamsId)
			this.props.profileActions.getProfileUser(this.props.profileParamsId)
			const isCurrentUser = (this.props.currentUserId === this.props.profileParamsId);
			this.props.profileActions.setIsCurrentUser(isCurrentUser);
			if (!isCurrentUser) {
				this.props.profileActions.getFriendshipStatus(this.props.currentUserId, this.props.profileParamsId)
			}
		}
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
		const actions = [
		  <FlatButton
		     label="Cancel"
		     primary={true}
		     onTouchTap={this.handleCloseModal}
	    />,
		]
		return (
			<div>
				<Paper zDepth={1} style={styles.jumbotron}>
					<div style={styles.profileInfo}>
						<div style={styles.firstRow}>
							<div style={styles.userInfo}>
								<p style={styles.userTitle}>
									{this.props.profileUser.first_name} {this.props.profileUser.last_name}
								</p>
								<ProfileButton 
									isCurrentUser={this.props.isCurrentUser}
									friendshipStatus={this.props.friendshipStatus}
									profileUserId={this.props.profileParamsId}
								/>
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
					<ProfileView 
						selectedProfileView={this.state.selectedProfileView}
						profileUserId={this.props.profileParamsId}
						profileFriends={this.props.profileFriends}
						profileRequests={this.props.profileRequests} 
						isCurrentUser={this.props.isCurrentUser}
						handleOpenModal={this.handleOpenModal}
					/> 
				</div>

				<Dialog
					title={"test"}
					actions={actions}
					modal={true}
					open={this.state.modalOpen}
					paperProps={{circle: true}}
					titleStyle={styles.dialogTitle}
				>
					<p>TEST TEST</p>
				</Dialog>
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	const profileParamsId = ownProps.match.params.id;
	const {currentUserId, currentUser} = state.session; 
	const { 
		profileUser, 
		profileFriends,
		profileRequests, 
		isCurrentUser, 
		friendshipStatus,
	} = state.profile;
	return {
		currentUserId, 
		currentUser, 
		profileParamsId, 
		profileUser, 
		profileFriends, 
		profileRequests, 
		isCurrentUser,
		friendshipStatus,
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
