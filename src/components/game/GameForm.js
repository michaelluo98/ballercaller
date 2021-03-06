import React from 'react';
import TextInput from './TextInput';
import ToggleButton from './ToggleButton';
import TimeInput from './TimePicker';
import DateInput from './DateInput';
import LocationInput from './LocationInput';
import DropDown from './DropDown';
import gameStyles from '../styles/gameStyles';
import IconButton from 'material-ui/IconButton';
import BallLogo from '../../icons/basketball.svg';

const inputStyle = {
	display: 'inline',
	float: 'right',
	marginRight: '20px'
}

const GameForm = ({onChange, onSave, courts}) => (
  <div style={gameStyles.main}>
  	<div style={gameStyles.keyCircle}></div>
    <form onSubmit={onSave} style={gameStyles.text}>
			<TextInput
				multiline="false"
				inputStyle={{paddingLeft: '5px'}}
				hintStyle={{paddingLeft: '10px'}}
				onChange={onChange}/>
      <div style={gameStyles.dateTime}>
        <DateInput onChange={onChange}/>
        <TimeInput onChange={onChange}/>
      </div>
      <DropDown onChange={onChange}/>
			<LocationInput onChange={onChange} courts={courts}/>
      <TextInput multiline="true" onChange={onChange}/>
      <ToggleButton onChange={onChange}/>
			<IconButton
				onTouchTap={onSave}
				style={inputStyle}
				tooltip="Create game"
				touch={true}
				tooltipPosition="top-left">
				<svg className={`icon icon-info`} style={gameStyles.iconStyle} width={40} height={40}>
					<use xlinkHref={`${BallLogo}#icon-info`} />
				</svg>
			</IconButton>
    </form>
  </div>
);

export default GameForm;
