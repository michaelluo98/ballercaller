const BASE_URL = "http://localhost:3000/api/v1";
const API_KEY = "ec8c6cb96a1e1457440eda7ffc21a046c6b4c1558adfebef1d1a213b9f0b46da";

class ProfileApi {
  static async sendRequest(currentUserId, profileUserId) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`, 
			'Accept':'application/json',
			'Content-Type':'application/json'
		})
		return await fetch(`${BASE_URL}/users/${currentUserId}/friendships/${profileUserId}/sendrequest`, {
			headers, 
			method: 'POST',
		}) 
	}
}

export default ProfileApi;
