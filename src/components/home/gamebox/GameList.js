import React from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import GameListRow from './GameListRow';
import BackIcon from 'material-ui/svg-icons/navigation/arrow-back' 
import IconButton from 'material-ui/IconButton';

/*const style = {
  height: '490px',
  width: '550px',
  marginLeft: '40px',
	marginTop: '10px',
  textAlign: 'center',
  display: 'absolute',
}*/

const GameList = ({games, courts, creators, listGame, handleOpen,
									handleBack, handleOpenModal}) => (
    <div className="game-list">
			{!listGame && 
				<IconButton 
					style={{position: 'absolute', left: '55%', bottom: '30%'}}
					onTouchTap={handleBack}>
					<BackIcon />
				</IconButton>} 
      <List>
				{listGame && <Subheader> Games Near You: </Subheader>} 
			{games.map((game, index) => {
				return <GameListRow
									key={game.id}
                  gameId={game.id}
									name={game.name}
									time={game.start_time}
									court={courts[index].name}
									creator={creators[index]}
									listGame={listGame}
									mode={game.mode}
									handleOpen={handleOpen}
									handleOpenModal={handleOpenModal}
								/>;
			})}
      </List>
    </div>

);

export default GameList;
