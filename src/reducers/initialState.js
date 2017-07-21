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
	currentUserId: sessionStorage.currentUserId || 0,
	favorites: [], 
	friends: [], 
	requests: []
}

export const profileInitialState = {
	profileId: 0, 
	profileUser: {}, 
}
