import React from 'react';
import moment from 'moment';
import {ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar';
import {darkBlack} from 'material-ui/styles/colors';
import RightIconMenu from './RightIconMenu'
// rightIconButton={<RightIconMenu gameId={gameId}/>}

function GameListRow({gameId, name, time, court, mode, handleOpen}) {
	const intro = `${name} @ ${court}`;
    return (
    <ListItem
      leftAvatar={<Avatar src="images/jason_face2.png" />}
      primaryText={intro}
			rightIconButton={<RightIconMenu 
												gameId={gameId}
												handleOpen={handleOpen}
											 />}
      secondaryText={
        <p> <span style={{color: darkBlack}}>mode: {mode} | GameTime: {moment(time).format('MMMM Do [@] h:mm a')} </span> </p>
      }
      secondaryTextLines={1}
    />
  )
}

export default GameListRow;
