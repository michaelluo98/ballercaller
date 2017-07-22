import React from 'react';

import RequestsList from './RequestsList';
import styles from '../styles/profileStyle';
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

function UserProfileFriends({friends, requests, isCurrentUser}) {
	return (
		<div style={{width: '50%'}}>
			{isCurrentUser ? 
				<p style={styles.listViewTitle}>Requests: </p> : 
				null
			}
			{isCurrentUser ? 
				<RequestsList requests={requests} /> : 
				null
			}
			<p style={styles.listViewTitle}>Friends </p>
			<Paper zDepth={1} style={styles.friends}>
				<List>
					{friends.map((friend) => {
						const friendFullName = friend.first_name + ' ' + friend.last_name;
						return <ListItem
											primaryText={friendFullName}
											rightIcon={<CommunicationChatBubble />}
											key={friend.id}
										/>
					})}
				</List>
			</Paper>
		</div>
	)
}

export default UserProfileFriends;
