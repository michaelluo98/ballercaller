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
import ChatClient from '../chat/ChatClient';

import styles from '../styles/profileStyle';
import moment from 'moment'
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
			showGame: {},
			showCourt: {},
			showCreator: {},
			teamOne: [],
			teamTwo: [],
			teamOneName: '',
			teamTwoName: ''
		}

		this.getProfileGames = this.getProfileGames.bind(this);
		this.getProfileUserGames = this.getProfileUserGames.bind(this);
		this.updateProfileView = this.updateProfileView.bind(this);
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.displayGame = this.displayGame.bind(this);
		
		this.showCreatorName = this.showCreatorName.bind(this);
		this.showCourtInfo = this.showCourtInfo.bind(this);
		this.showTeamInfo = this.showTeamInfo.bind(this);
		this.showSettingInfo = this.showSettingInfo.bind(this);
	}

	displayGame() {
		return (
		<div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between'}}>
			<div style={{width: '50%'}}>
				<p style={{fontSize: '14px'}}>
					GameTime: {moment(this.state.showGame.start_time).format('MMMM Do [@] h:mm:ss a')}	
				</p>
				{this.showSettingInfo(this.state.showGame)}
				{this.showCourtInfo(this.state.showCourt)}
				<h4 style={{fontSize: '14px', marginBottom: '0px'}}>Extra Information: </h4>
				<p style={{fontSize: '12px', marginTop: '5px'}}>{this.state.showGame.extra_info}</p>
				{this.showCreatorName(this.state.showCreator)}
			</div>
			<div style={{width: '45%'}}>
				<h3 style={{marginBottom: '0px', marginTop: '12px'}}>Teams: </h3>
				<div style={{display: 'flex', justifyContent: 'space-between'}}>
					{this.showTeamInfo(this.props.teamOne, this.state.teamOneName)}
					<h4>VS</h4>
					{this.showTeamInfo(this.props.teamTwo, this.state.teamTwoName)}
				</div>
			</div>
		</div>
		)
	}

	showCreatorName = (creator) => {
		return <p>Creator: {creator.first_name} {creator.last_name}</p>
	}

	showCourtInfo = (court) => {
		return <div>
				<h4 style={{marginBottom: '2px'}}>{court.name}</h4>
				<p style={{fontSize: '14px', marginTop: '0px'}}>
					{court.address}, {court.city}, {court.province} {court.postal_code}
				</p>
			</div>
	}

	showTeamInfo = (team, teamName) => {
		return <div>
			<h4>{teamName}</h4>
			{team.map((player, index) => {
				return <p style={{fontSize: '14px'}}>{index + 1}.  {player.first_name} {player.last_name}</p>
			})}
			</div>
	}

	showSettingInfo = (game) => {
		const gameSetting = game.setting ? `Indoor` : `Outdoor`
		let modeDisplay = ''
		if (game.mode === 'threes') {
			modeDisplay = '3 on 3'
		}
		else if (game.mode === 'fours') {
			modeDisplay = '4 on 4'
		}
		else {
			modeDisplay = '5 on 5'
		}
		return <p style={{fontSize: '14px'}}>{gameSetting} {modeDisplay}</p>
	}

	async handleOpenModal(gameId) {
		console.log('gameId in handleOpenModal: ', gameId)
		const showGameArr = this.props.upcomingGames.filter((game) => {
			return game.id === gameId
		})
		const showGame = showGameArr[0];
		console.log('showGame in handleOpenModal: ', showGame)
		const teamOneName = this.props.teams.filter((team) => {
			return team.id === ((showGame.id * 2) - 2) 
		})
		const teamTwoName = this.props.teams.filter((team) => {
			return team.id === (showGame.id * 2)
		})
		this.setState({teamOneName: teamOneName[0].name})
		this.setState({teamTwoName: teamTwoName[0].name})

		const showCourtArr = this.props.upcomingCourts.filter((court) => {
			return court.id === showGame.court_id
		})
		const showCreatorArr = this.props.upcomingCreators.filter((creator) => {
			return creator.id === showGame.game_mod_id
		})
		this.setState({showGame})
		this.setState({showCourt: showCourtArr[0]})
		await this.setState({showCreator: showCreatorArr[0]})
		await this.props.gameActions.loadPlayers(showGame.id)

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
					{this.displayGame()}
				</Dialog>

				<ChatClient />
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	const profileParamsId = ownProps.match.params.id;
	const {currentUserId, currentUser} = state.session; 
	const {teams, playersOne, playersTwo} = state.games;
	const { 
		profileUser, 
		profileFriends,
		profileRequests, 
		isCurrentUser, 
		friendshipStatus,
		upcomingGames, 
		upcomingCourts,
		upcomingCreators, 
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
		upcomingGames, 
		upcomingCourts,
		upcomingCreators, 
		teams, 
		teamOne: playersOne, 
		teamTwo: playersTwo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		gameActions: bindActionCreators(gameActions, dispatch), 
		sessionActions: bindActionCreators(sessionActions, dispatch), 
		profileActions: bindActionCreators(profileActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
