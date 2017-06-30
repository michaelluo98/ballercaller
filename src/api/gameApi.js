const BASE_URL = 'http://localhost:3000/api/v1';
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

// 
// function deleteQuestion (id) {
//   const headers = new Headers({
//     'Authorization':`Apikey ${API_KEY}`
//   });
// 	return fetch(`${BASE_URL}/questions/${id}`, {
// 		method: 'Delete',
// 		headers
// 	})
// 	.then(res => res.json());
// }
//
// function postQuestion (questionFormData) {
//   const headers = new Headers({
//     'Authorization':`Apikey ${API_KEY}`
//   });
//   return fetch(`${BASE_URL}/questions`, {
//     method: 'POST',
//     body: questionFormData,
//     headers
//   })
//     .then(res => res.json());
// }
//
// function getQuestions () {
//   const headers = new Headers({
//     'Authorization':`Apikey ${API_KEY}`
//   });
//   return fetch(`${BASE_URL}/questions`, {headers})
//     .then(res => res.json());
// }
//
// function getQuestion (id) {
//   const headers = new Headers({
//     'Authorization':`Apikey ${API_KEY}`
//   });
//   return fetch(`${BASE_URL}/questions/${id}`, {headers})
//   // A better practice when handling response from fetch
//   // is to check its status if it was successful (Status: 200 OK)
//   // before parsing as json with (res.json()).
//     .then(res => res.json());
// }
