import React from 'react';
import Paper from 'material-ui/Paper';
import TextInput from './TextInput';

const style = {
  height: 300,
  width: 250,
  margin: 20,
  position: 'fixed',
  bottom: '20px',
};

const formStyle = {
  display: 'flex',
  justifyContent: 'center'
}

const textStyle = {
  padding: '8px'
}

const GameForm = () => (
  <div style={formStyle}>
    <Paper style={style} zDepth={2} rounded={false}>
      <div style={textStyle}>
        <TextInput multiline="false" />
        
        <TextInput multiline="true" />
      </div>
    </Paper>
  </div>
);

export default GameForm;
