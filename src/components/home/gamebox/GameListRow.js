import React from 'react';
import moment from 'moment';
import {ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar';
import {darkBlack} from 'material-ui/styles/colors';
import RightIconMenu from './RightIconMenu'

function GameListRow({gameId, name, time, court, mode, handleOpen, creator}) {
	const intro = `${name} @ ${court}`;
	let modeDisplay = ''
	if (mode === 'threes') {
		modeDisplay = '3 on 3'
	}
	else if (mode === 'fours') {
		modeDisplay = '4 on 4'
	}
	else {
		modeDisplay = '5 on 5'
	}
	const creatorName = `${creator.first_name} ${creator.last_name}`
  return (
    <ListItem
      leftAvatar={<Avatar src="images/jason_face2.png" />}
      primaryText={intro}
			rightIconButton={<RightIconMenu 
												gameId={gameId}
												handleOpen={handleOpen}
											 />}
      secondaryText={
				<p>
					<span style={{color: darkBlack}}>
						{modeDisplay} | 
						GameTime: {moment(time).format('MMMM Do [@] h:mm a')} | 
						Creator: {creatorName}
					</span> 
				</p>
      }
      secondaryTextLines={1}
    />
  )
}

export default GameListRow;
