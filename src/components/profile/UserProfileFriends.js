import React from 'react';

import styles from '../styles/profileStyle';
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

function UserProfileFriends({friends, requests}) {
	return (
		<div style={{width: '50%'}}>
			<p style={styles.listViewTitle}>Requests: </p>
			<Paper zDepth={1} style={styles.friends}>
				<List>
					{requests.map((request) => {
						const reqFullName = request.first_name + ' ' + request.last_name;
						return <ListItem innerDivStyle={styles.listItemStyle}>
											<div style={{display: 'inline'}}>
												<p>{reqFullName}</p>	
											</div>
											<div style={{display: 'inline', marginTop: '10px'}}>
												<RaisedButton 
													label="Accept" 
													primary={true} 
													style={{marginRight: '10px', height: '24px'}}
													buttonStyle={{height: '24px', lineHeight: '24px'}}
												/>
												<RaisedButton 
													label="Decline" 
													secondary={true} 
													style={{height: '24px'}}
													buttonStyle={{height: '24px', lineHeight: '24px'}} 
												/>
											</div>
										</ListItem>

					})}
				</List>
			</Paper>
			<p style={styles.listViewTitle}>Friends </p>
			<Paper zDepth={1} style={styles.friends}>
				<List>
					{friends.map((friend) => {
						const friendFullName = friend.first_name + ' ' + friend.last_name;
						return <ListItem
											primaryText={friendFullName}
											rightIcon={<CommunicationChatBubble />}
										/>
					})}
				</List>
			</Paper>
		</div>
	)
}

export default UserProfileFriends;
