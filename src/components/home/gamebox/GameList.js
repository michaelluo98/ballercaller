import React from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import GameListRow from './GameListRow';
import BackIcon from 'material-ui/svg-icons/navigation/arrow-back' 
import IconButton from 'material-ui/IconButton';

const style = {
  height: '490px',
  width: '550px',
  marginLeft: '40px',
	marginTop: '10px',
  textAlign: 'center',
  display: 'absolute',
}

const GameList = ({games, courts, creators, listGame, handleOpen, handleBack}) => (
    <div className="game-list" style={{maxHeight: '490px', overflow: 'auto', paddingTop: '15px'}}>
			{listGame === false ? 
				<IconButton 
					style={{position: 'absolute', left: '55%', bottom: '30%'}}
					onTouchTap={handleBack}>
					<BackIcon />
				</IconButton> :
				<div></div>
			}
      <List>
				{listGame ?
						<Subheader> Games Near You: </Subheader> :
						<div></div>
				}
			{games.map((game, index) => {
				return <GameListRow
									key={game.id}
                  gameId={game.id}
									name={game.name}
									time={game.start_time}
									court={courts[index].name}
									creator={creators[index]}
									mode={game.mode}
									handleOpen={handleOpen}
								/>;
			})}
      </List>
    </div>

);

export default GameList;
