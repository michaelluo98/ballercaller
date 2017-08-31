const BASE_URL = "https://ballercaller-api.herokuapp.com/api/v1/api/v1";
const API_KEY = "ec8c6cb96a1e1457440eda7ffc21a046c6b4c1558adfebef1d1a213b9f0b46da";

class ProfileApi {
  static sendRequest(currentUserId, profileUserId) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`, 
			'Accept':'application/json',
			'Content-Type':'application/json'
		})
		return fetch(`${BASE_URL}/users/${currentUserId}/friendships/${profileUserId}/sendrequest`, {
			headers, 
			method: 'POST',
		}) 
	}

  static acceptRequest(currentUserId, newFriendId) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`, 
			'Accept':'application/json',
			'Content-Type':'application/json'
		})
		return fetch(`${BASE_URL}/users/${currentUserId}/friendships/${newFriendId}/accept`, {
			headers, 
			method: 'PATCH',
		}) 
	}

  static rejectRequest(currentUserId, newFriendId) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`, 
			'Accept':'application/json',
			'Content-Type':'application/json'
		})
		return fetch(`${BASE_URL}/users/${currentUserId}/friendships/${newFriendId}/reject`, {
			headers, 
			method: 'PATCH',
		}) 
	}
}

export default ProfileApi;
