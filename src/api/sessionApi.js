const BASE_URL = "http://localhost:3000/api/v1";

class SessionApi {
  static login(credentials) {
    const request = new Request('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: credentials})
    });

    return fetch(request).then(response => {
			console.log('---------------response in login', response);
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getCurrentUser(credentials) {
    console.log('getCurrentUser credentials:', credentials);
    fetch(`${BASE_URL}/users/${credentials.email}`)
      .then(res => res.json())
  }

	static getUserGames(userId) {
		return fetch(`http://localhost:3000/api/v1/users/${userId}/history`)
			.then(res => {
				/*console.log(res.json());*/
				return res.json();
			})
			/*.then(res => {
				console.log(res);
				return res;
			})*/
	}

}

export default SessionApi;
