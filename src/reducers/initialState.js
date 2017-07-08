export const gameInitialState = {
	games: [],
	courts: [],
	allCourts: [], 
	foundGames: [], 
	foundCourts: []
}

export const sessionInitialState = {
	session: !!sessionStorage.jwt, 
	currentUser: {}
}

