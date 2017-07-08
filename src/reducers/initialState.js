const initialState = {
	games: [],
	courts: [],
	allCourts: [],
  session: !!sessionStorage.jwt,
	currentUser: {}
}

export default initialState;
