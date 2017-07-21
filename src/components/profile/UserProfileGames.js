import React from 'react';

import styles from '../styles/profileStyle';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';


function UserProfileGames({games, isCurrentUser}) {
	return (
		<div style={{width: '50%'}}>
			{isCurrentUser ? 
				<p style={styles.listViewTitle}>Your Games: </p> : 
				<p style={styles.listViewTitle}>Games: </p>
			}
			<Paper zDepth={1} style={styles.games}>
				<List>
					{games.map((game) => {
						return  <ListItem
											primaryText={game.name}
											rightIcon={<CommunicationChatBubble />}
										/>
					})}
				</List>
			</Paper>
		</div>
	)
}

export default UserProfileGames;
