export const gameInitialState = {
	games: [],
	courts: [],
	allCourts: []
}

export const sessionInitialState = {
	session: !!sessionStorage.jwt, 
	currentUser: {}
}

