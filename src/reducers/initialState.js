export const gameInitialState = {
	games: [],
	courts: [],
	allCourts: [], 
	foundGames: []
}

export const sessionInitialState = {
	session: !!sessionStorage.jwt, 
	currentUser: {}
}

