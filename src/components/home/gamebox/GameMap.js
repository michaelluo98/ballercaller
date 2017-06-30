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

const GameMap = () => (
    <div>
      <Paper style={mapStyle} zDepth={2} circle={true} />
    </div>
);

export default GameMap;
