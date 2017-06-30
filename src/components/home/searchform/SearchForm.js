import React from 'react';
import Paper from 'material-ui/Paper';
//import TextField from 'material-ui/TextField';
import Searcher from './SearchBar';
import TimeToPlay from './TimePicker';
import LocationSearcher from './LocationSearcher';
import SettingMode from './SettingMode';
import PlayerMode from './PlayerMode';

const style = {
    height: 175,
    width: 470,
    margin: 30,
  	marginLeft: 60,
    textAlign: 'center',
    display: 'inline-block',
		marginTop: 330
};


const firstRowStyles = {
  display: 'flex', 
  flexDirection: 'row',
  justifyContent: 'space-around', 
}

const SearchForm = () => (
    <div>
      <Paper style={style} zDepth={2} rounded={false}>
				<div style={firstRowStyles}>
					<Searcher />
				</div>
				<div style={firstRowStyles}>
					<SettingMode />
					<TimeToPlay /> 
				</div>
				<div style={firstRowStyles}>
					<PlayerMode />
					<LocationSearcher />
				</div>
			</Paper>
    </div>
);

export default SearchForm;
