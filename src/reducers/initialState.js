export const gameInitialState = {
	games: [],
	courts: [],
	allCourts: [], 
	foundGames: [], 
	foundCourts: [], 
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

