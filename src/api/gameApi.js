const BASE_URL = "https://ballercaller-api.herokuapp.com/api/v1";
// const BASE_URL = "https://ballercaller-api.herokuapp.com/api/v1";
const API_KEY = "9fd351c85aecccbec881389f33c4519f33e08c46e89726d122b4fa13a7f9219d";

class GameApi {
	static getAllGames() {
		return new Promise((resolve, reject) => {
			const headers = new Headers({
				'Authorization':`Apikey ${API_KEY}`
			})
			const allGames = fetch(`${BASE_URL}/games`, {headers})
				.then(res => res.json());
			resolve(allGames);
		});
	}

}

export default GameApi;
