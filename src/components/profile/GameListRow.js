import React from 'react';
import RightIconMenu from './RightIconButtons';
import moment from 'moment';
import {ListItem} from 'material-ui/List'
import {darkBlack} from 'material-ui/styles/colors';


function GameListRow({gameId, name, time, court, mode, handleOpenModal, creator}) {
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
      primaryText={intro}
			rightIconButton={<RightIconMenu 
												handleOpenModal={handleOpenModal}
												gameId={gameId}
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
			key={gameId}
    />
  )
}

export default GameListRow;
