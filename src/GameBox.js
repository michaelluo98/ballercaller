import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
    height: 500,
    width: 500,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',

};

const GameBox = () => (
    <div>
      <Paper style={style} zDepth={2} circle={true} />
    </div>
);


export default GameBox; 
