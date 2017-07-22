import React from 'react';
import FriendButton from './FriendButton';
import styles from '../styles/profileStyle';
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List';

function RequestsList({requests}) {
	return (
		<Paper zDepth={1} style={styles.friends}>
			{requests.length === 0 ? 
				<p style={styles.emptyTextRequest}>Currently no friend requests</p> :
				<List>
					{requests.map((request) => {
						const reqFullName = request.first_name + ' ' + request.last_name;
						return (
							<ListItem
								innerDivStyle={styles.listItemStyle}
								key={request.id} >
								<div style={{display: 'inline'}}>
									<p>{reqFullName}</p>	
								</div>
								<FriendButton 
									friendshipStatus={'requested'}
									friendId={request.id}
								/>
							</ListItem>
						)
					})}
				</List>
			}
		</Paper>

	)
}

export default RequestsList; 

