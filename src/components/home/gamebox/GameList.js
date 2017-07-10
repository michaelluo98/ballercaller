import React from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import GameListRow from './GameListRow';
import Paper from 'material-ui/Paper';

const style = {
  height: '490px',
  width: '550px',
  marginLeft: '40px',
	  marginTop: '10px',
  textAlign: 'center',
  display: 'absolute',
}

const GameList = ({games, courts, listGame}) => (
    <div className="game-list">
      <Paper zDepth={2} rounded={false} style={style}>
        <List>
					{listGame ?
							<Subheader> Games Near You: </Subheader> :
							<div></div>
					}
				{games.map((game, index) => {
          console.log('gameId in GameList:', game.id)
					return <GameListRow
										key={game.id}
                    gameId={game.id}
										name={game.name}
										time={game.start_time}
										court={courts[index].name}
										mode={game.mode} />;
				})}
        </List>
      </Paper>
    </div>

);

export default GameList;
