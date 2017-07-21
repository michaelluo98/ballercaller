import React from 'react'; 

import styles from '../styles/profileStyle'; 
import Paper from 'material-ui/Paper';

function UserProfileGames({games}) {
	return (
		<Paper zDepth={1} style={styles.games}>
			{games.map((game) => {
				return <p>{game.name}</p>
			})}
		</Paper>
	)
}

export default UserProfileGames;
