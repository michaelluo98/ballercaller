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
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getCurrentUser(credentials) {
    console.log('getCurrentUser credentials:', credentials);
    fetch(`${BASE_URL}/users/${credentials.email}`)
      .then(res => {
        return res.json();
      })
  }

}

export default SessionApi;
