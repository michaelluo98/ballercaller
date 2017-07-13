import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as gameActions from '../../actions/gameActions';
import SearchForm from './searchform/SearchForm';
import GameBox from './gamebox/GameBox';
import Calendar from './tabs/ManageCalendarPage';
import GameList from './gamebox/GameList';
import Paper from 'material-ui/Paper';
import {NavLink} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';

const styles = {
	findGameStyle: {
    height: 175,
    width: 470,
    margin: 30,
  	marginLeft: 60,
    textAlign: 'center',
		marginTop: 330,
		display: 'inline-block',
		maxHeight: 175,
		overflow: 'auto'
	},
	buttonsStyle: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%'
	}

}

class ManageHomePage extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			game: Object.assign({}, this.props.game),
			findToggle: false,
			open: false, 
			modalOpen: false, 
			showGame: {}, 
			showCourt: {}, 
			showCreator: {}, 
			teamOne: [], 
			teamTwo: []
		}
		this.updateGameState = this.updateGameState.bind(this);
		this.saveGame = this.saveGame.bind(this);
		this.findGame = this.findGame.bind(this);
		this.displayGame = this.displayGame.bind(this);
		this.handleOpenBar = this.handleOpenBar.bind(this);
		this.handleCloseBar = this.handleCloseBar.bind(this);
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	handleOpenBar() {
		this.setState({open: true});
	}

	handleCloseBar() {
		this.setState({open: false})
	}
	
	async handleOpenModal(gameId) {
		const showGameArr = this.props.games.filter((game) => {
			return game.id == gameId
		})
		const showGame = showGameArr[0]
		const showCourtArr = this.props.courts.filter((court) => {
			return court.id == showGame.court_id
		})
		const showCreatorArr = this.props.creators.filter((creator) => {
			return creator.id == showGame.game_mod_id
		})
		this.setState({showGame})
		this.setState({showCourt: showCourtArr[0]})
		await this.setState({showCreator: showCreatorArr[0]})
		await this.props.actions.loadPlayers(showGame.id)
		this.setState({modalOpen: true})
	}
	
	handleCloseModal() {
		this.props.actions.clearPlayers();
		this.setState({modalOpen: false})
	}

	updateGameState(event, name='', value = 0) {
		let game = this.state.game;

		if (value === 0 && typeof(name) === 'string') {
			const field = event.target.name;
			game[field] = event.target.value;
		}
		else if (typeof(name) === "object") {
			const time = name.toString().slice(16,24);
			if (time === '00:00:00') {
				game['start_time'] = name.toString().slice(0,15);
			}
			else {
				game['start_time'] = game['start_time'].concat(name.toString().slice(15));
			}
		}
		else {
			game[name] = value;
		}
		return this.setState({game: game});
	}

	saveGame(event) {
		event.preventDefault();
		this.setState({findToggle: false})
		this.setState({game: Object.assign({}, this.props.game)})
		this.props.actions.findGames(this.state.game)
	}

	findGame() {
		if (this.props.foundGames.length === 0) {
			return <SearchForm
							onChange={this.updateGameState}
							onSave={this.saveGame}
							courts={this.props.allCourts}
						 />
		}
		else if (this.props.foundGames.length === 1 &&
							this.props.foundGames[0] === 'error') {
			return <Paper style={styles.findGameStyle} zDepth={2} rounded={false}>
							 <div style={styles.buttonsStyle}>
								 <div>
										<FlatButton
											label="Create Your Own Game"
											primary={true}
											style={{display: 'block'}}
											onTouchTap={() => {
												this.props.actions.clearFound();
												this.props.history.push('/game');
											}}/>
									<FlatButton
										label="Look For Another Game"
										secondary={true}
										style={{display: 'block'}}
										onTouchTap={() => this.props.actions.clearFound()}/>
								</div>
							 </div>
						 </Paper>
		}
		else {
			return <Paper style={styles.findGameStyle} zDepth={2} rounded={false}>
								<GameList
									games={this.props.foundGames}
									courts={this.props.foundCourts}
									creators={this.props.foundCreators}
									listGame={false}
									handleOpen={this.handleOpenBar}
									handleBack={() => this.props.actions.clearFound()}
									handleOpenModal={this.handleOpenModal}
								/>
							</Paper>
		}
	}

	displayGame() {
		return <div style={{width: '100%', height: '100%'}}>
						{this.state.showGame.start_time}	
						{this.state.showCourt.name}
						{this.state.showCreator.first_name}
						{this.state.showCreator.last_name}
						{this.state.teamOne.map((player) => {
							return <p>{player.first_name}</p>
						})}
						<p>-----------------------------</p>
						{this.state.teamTwo.map((player) => {
							return <p>{player.first_name}</p>
						})}
					</div>
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
				<GameBox
					handleOpen={this.handleOpenBar}
					handleOpenModal={this.handleOpenModal}
				/>
				{this.findGame()}
				<Calendar />

				<Snackbar
				  open={this.state.open}
				  message="successfully joined game!"
				  autoHideDuration={4000}
				  onRequestClose={this.handleCloseBar}
				/>

				<Dialog
					title={this.state.showGame.name}
					actions={actions}
					modal={true}
					open={this.state.modalOpen}
					style={{width: '60%', height: '100%'}}
					paperProps={{circle: true}}
				>
					{this.displayGame()}
					
				</Dialog>
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	let game = {name: '', mode: '', start_time: '',
							court_id: '', setting: ''};
	const {allCourts, foundGames, foundCourts, foundCreators} = state.games;
	const {games, courts, creators} = state.games;
	const {playersOne, playersTwo} = state.games;
	return {
		game: game,
		allCourts,
		foundGames,
		foundCourts,
		foundCreators, 
		games, 
		courts, 
		creators, 
		teamOne: playersOne, 
		teamTwo: playersTwo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(gameActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageHomePage);
