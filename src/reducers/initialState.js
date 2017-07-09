export const gameInitialState = {
	games: [],
	courts: [],
	allCourts: [], 
	foundGames: [], 
	foundCourts: [], 
	lastGameId: ''
}

export const sessionInitialState = {
	session: !!sessionStorage.jwt, 
	currentUser: {}
}

