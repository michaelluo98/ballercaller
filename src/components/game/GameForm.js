import React from 'react';
import Paper from 'material-ui/Paper';
import TextInput from './TextInput';
import ToggleButton from './ToggleButton';
import TimeInput from './TimePicker';
import DateInput from './DateInput';

const style = {
  height: 300,
  width: 250,
  margin: 20,
  position: 'fixed',
  bottom: '20px',
  formStyle: {
    display: 'flex',
    justifyContent: 'center'
  },
  textStyle: {
    padding: '8px'
  },
  dateTimeStyle: {
    display: 'flex',
    justifyContent: 'space-around'
  }
};


const GameForm = () => (
  <div style={style.formStyle}>
    <Paper style={style} zDepth={2} rounded={false}>
      <div style={style.textStyle}>
        <TextInput multiline="false" />
        <div style={style.dateTimeStyle}>
          <DateInput />
          <TimeInput />
        </div>
        <ToggleButton />
        <TextInput multiline="true" />
      </div>
    </Paper>
  </div>
);

export default GameForm;
