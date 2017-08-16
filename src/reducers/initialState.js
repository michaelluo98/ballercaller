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
	isCurrentUser: false,
	friendshipStatus: 'isCurrentUser', 
	profileUser: {}, 
	profileFriends: [], 
	profileRequests: [], 
	upcomingGames: [], 
	upcomingCourts: [],
	upcomingCreators: [],
	historyGames: [], 
	historyCourts: [], 
	historyCreators: []
}

export const messagesInitialState = {
	messages: {}
}
