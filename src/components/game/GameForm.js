import React from 'react';
import TextInput from './TextInput';
import ToggleButton from './ToggleButton';
import TimeInput from './TimePicker';
import DateInput from './DateInput';
import DropDown from './DropDown';
import styles from '../styles/gameStyles';

const inputStyle = {
	//position: 'fixed', 
	//bottom: '50%', 
	//left: '48%', 
	borderRadius: '100px', 
	width: '50px', 
	height: '50px', 
	display: 'inline', 
	float: 'right', 
	marginRight: '20px'
}

const GameForm = ({onChange, onSave}) => (
  <div style={styles.mainStyle}>
  	<div style={styles.keyCircle}></div>
    <form onSubmit={onSave} style={styles.textStyle}>
			<TextInput 
				multiline="false"
				inputStyle={{paddingLeft: '5px'}} 
				hintStyle={{paddingLeft: '10px'}}
				onChange={onChange}/>
      <div style={styles.dateTimeStyle}>
        <DateInput onChange={onChange}/>
        <TimeInput onChange={onChange}/>
      </div>
      <DropDown onChange={onChange}/>
      <TextInput multiline="true" onChange={onChange}/>
      <ToggleButton onChange={onChange}/>
			<input 
				type="submit"
				style={inputStyle}
				onClick={onSave}
			/>
    </form>
  </div>
);

export default GameForm;
