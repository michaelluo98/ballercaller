export const gameInitialState = {
	games: [],
	courts: [],
	creators: [],
	allCourts: [], 
	foundGames: [], 
	foundCourts: [], 
	foundCreators: [],
	lastGameId: '', 
	teams: [], 
	playersOne: [], 
	playersTwo: []
}

export const sessionInitialState = {
	session: !!sessionStorage.jwt, 
	currentUser: {}, 
	favorites: []
}

