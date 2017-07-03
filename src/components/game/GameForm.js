import React from 'react';
import Paper from 'material-ui/Paper';
import TextInput from './TextInput';
import ToggleButton from './ToggleButton';
import TimeInput from './TimePicker';
import DateInput from './DateInput';
import DropDown from './DropDown';

const style = {
  height: 305 ,
  width: 250,
  marginBottom: 20,
  padding: 0,
  position: 'fixed',
  bottom: '20px',
  border: '5px solid black',
  keyCircle: {
    width: '240px',
    height: '120px', /* as the half of the width */
    borderTopLeftRadius: '100px',
    borderTopRightRadius: '100px',
    border: '5px solid black',
    borderBottom: 0,
    position: 'fixed',
    bottom: '50%'
  },
  formStyle: {
    display: 'flex',
    justifyContent: 'center',
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
  	<div style={style.keyCircle}></div>
    <Paper style={style} zDepth={2} rounded={false}>
      <div style={style.textStyle}>
        <TextInput multiline="false" />
        <div style={style.dateTimeStyle}>
          <DateInput />
          <TimeInput />
        </div>
        <DropDown />
        <ToggleButton />
        <TextInput multiline="true" />
      </div>
    </Paper>
  </div>
);

export default GameForm;
