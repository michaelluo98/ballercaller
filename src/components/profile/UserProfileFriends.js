import React from 'react';

import styles from '../styles/profileStyle';
import Paper from 'material-ui/Paper'

function UserProfileFriends({friends, requests}) {
	return (
		<Paper zDepth={1} style={styles.friends}> 
			<h1>Requests</h1>
			{requests.map((request) => { 
				return <h3>{request.first_name}</h3> 
			})}

			<h1>Friends</h1>
			{friends.map((friend) => { 
				return <h3>{friend.first_name}</h3> 
			})}
		</Paper> 
	)
}

export default UserProfileFriends;
