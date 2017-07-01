import React from 'react';
import Paper from 'material-ui/Paper';


const mapStyle = {
    height: 420,
    width: 550,
    marginLeft: 40,
 	  marginTop: 10,
    textAlign: 'center',
    display: 'absolute',

};

function gameRow(game, index) {
  return <div key={index}>{game.name}</div>;
}

const GameMap = ({games}) => (
    <div>
      <Paper style={mapStyle} zDepth={2} circle={true}>
        <div>
          <h1>Games</h1>
          {console.log(games)}
          {games && games.map(gameRow)}
        </div>
      </Paper>
    </div>
);

export default GameMap;
