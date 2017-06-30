import React from 'react';
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import GameListRow from './GameListRow';

const GameList = () => (
    <div className="game-list">
        <List>
        <Subheader>Games Near You:</Subheader>
          <GameListRow />
          <Divider inset={true} />
        </List>
    </div>

);

export default GameList;
