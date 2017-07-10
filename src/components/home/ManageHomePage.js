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

const styles = {
	findGameStyle: {
    height: 175,
    width: 470,
    margin: 30,
  	marginLeft: 60,
    textAlign: 'center',
		marginTop: 330, 
		display: 'inline-block', 
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
			foundToggle: false, 
			open: false
		}
		this.updateGameState = this.updateGameState.bind(this);
		this.saveGame = this.saveGame.bind(this);
		this.findGame = this.findGame.bind(this);
		this.handleOpenBar = this.handleOpenBar.bind(this);
		this.handleCloseBar = this.handleCloseBar.bind(this);
	}

	handleOpenBar() {
		this.setState({open: true});
	}

	handleCloseBar() {
		this.setState({open: false})
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
		this.setState({foundToggle: false})
		this.props.actions.findGames(this.state.game)
	}

	findGame() {
		console.log('state in findGame: ', this.state); 
		if (this.props.foundGames.length === 0 || this.state.foundToggle) {
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
									<NavLink to="/game" style={{display: 'block'}}>
										<FlatButton 
											label="Create Your Own Game" 
											primary={true} />
									</NavLink>
									<FlatButton 
										label="Look For Another Game" 
										secondary={true}
										style={{display: 'block'}}
										onTouchTap={() => this.setState({foundToggle: true})}/>
								</div>
							 </div>
						 </Paper>
		}
		else {
			return <Paper style={styles.findGameStyle} zDepth={2} rounded={false}>
								<GameList 
									games={this.props.foundGames.slice(0,2)}
									courts={this.props.foundCourts.slice(0,2)}
									listGame={false}
									handleOpen={this.handleOpenBar}
								/>
							</Paper>
		}
	}

	render() {
		return (
			<div>
				<GameBox 
					handleOpen={this.handleOpenBar} 
				/>
				{this.findGame()}
				<Calendar />
				<Snackbar
				  open={this.state.open}
				  message="successfully joined game!"
				  autoHideDuration={4000}
				  onRequestClose={this.handleCloseBar}
				/>
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	let game = {name: '', mode: 'threes', start_time: '',
							court_id: '', setting: 'false'};
	const {allCourts, foundGames, foundCourts} = state.games
	return {
		game: game,
		allCourts, 
		foundGames, 
		foundCourts
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(gameActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageHomePage);
