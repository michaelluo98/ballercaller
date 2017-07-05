import React from 'react';
import Paper from 'material-ui/Paper';
import TextInput from './TextInput';
import ToggleButton from './ToggleButton';
import TimeInput from './TimePicker';
import DateInput from './DateInput';
import DropDown from './DropDown';

const styles = {
	mainStyle: {
		height: 305 ,
		width: 250,
		padding: 0,
		position: 'fixed',
		bottom: '0px',
		border: '5px solid black',
		display: 'flex', 
		justifyContent: 'center', 
		left: '39%', 
		zIndex: '100'
	},
  keyCircle: {
    width: '250px',
    height: '120px', /* as the half of the width */
    borderTopLeftRadius: '100px',
    borderTopRightRadius: '100px',
    border: '5px solid black',
    borderBottom: 0,
    position: 'fixed',
    bottom: '44%'
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
  <div style={styles.mainStyle}>
  	<div style={styles.keyCircle}></div>
    <div style={styles.textStyle}>
      <TextInput multiline="false" inputStyle={{paddingLeft: '5px'}} hintStyle={{paddingLeft: '10px'}}/>
      <div style={styles.dateTimeStyle}>
        <DateInput />
        <TimeInput />
      </div>
      <DropDown />
      <ToggleButton />
      <TextInput multiline="true" />
    </div>
  </div>
);

export default GameForm;
