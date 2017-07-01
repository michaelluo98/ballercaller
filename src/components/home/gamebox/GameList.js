import React from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import GameListRow from './GameListRow';

const GameList = ({games, courts}) => (
    <div className="game-list">
        <List>
        <Subheader>Games Near You:</Subheader>
				{games.map((game, index) => {
					return <GameListRow 
										key={game.id}
										name={game.name}
										time={game.start_time}
										court={courts[index].name}
										mode={game.mode} />;
				})}
        </List>
    </div>

);

export default GameList;
