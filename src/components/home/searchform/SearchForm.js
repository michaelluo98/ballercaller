import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import GameName from './SearchBar';
import TimePicker from './TimePicker';
import LocationSearcher from './LocationSearcher';
import SettingMode from './SettingMode';
import PlayerMode from './PlayerMode';
import DatePicker from './DatePicker';

// keep because need to change the refactor the style
const style = {
  height: 175,
  width: 470,
  margin: 30,
  marginLeft: 60,
  textAlign: 'center',
  display: 'inline-block',
	marginTop: 330,
};

const firstRowStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
}

const SearchForm = ({onChange, onSave, courts}) => (
    <div>
      <Paper style={style} zDepth={2} rounded={false}>
				<form onSubmit={onSave} >
					<div style={firstRowStyles}>
						<GameName onChange={onChange}/>
            <PlayerMode onChange={onChange}/>
					</div>
					<div style={firstRowStyles}>
            <DatePicker onChange={onChange} />
						<LocationSearcher onChange={onChange} courts={courts}/>
					</div>
					<div style={firstRowStyles}>
            <TimePicker onChange={onChange}/>
            <div style={Object.assign({}, firstRowStyles, {width: '50%'})}>
              <SettingMode onChange={onChange}/>
              <FlatButton label="search" primary={true}
                onTouchTap={onSave}
                labelPosition='before'
                labelStyle={{top: '5px'}}
                style={{marginTop: '10px', marginRight: '10px'}}/>
            </div>
					</div>
				</form>
			</Paper>
    </div>
);

export default SearchForm;
