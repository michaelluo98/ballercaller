import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Searcher from './SearchBar';
import TimeToPlay from './TimePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import TimePicker from 'material-ui/TimePicker';


const style = {
    height: 200,
    width: 470,
    margin: 30,
	marginLeft: 60,
    textAlign: 'center',
    display: 'inline-block',

};

const fieldStyle = {
  margin: 10,
  fontSize: 14
}

const radioStyles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
    paddingLeft: 30,
    textAlign: 'left'

  },
};

const firstRowStyles = {
  display: 'flex', 
  flexDirection: 'row',
  justifyContent: 'space-between'
}


const RadioButtonDefault = () => (
  <div>
    <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
      <RadioButton
        value="not_light"
        label="Indoor?"
        labelStyle={{textAlign: "left"}}
      />
      <RadioButton
        value="not_light"
        label="Outdoor?"
        labelStyle={{textAlign: "left"}}
      />
    </RadioButtonGroup>
  </div>
);

const SearchForm = () => (
    <div>
      <Paper style={style} zDepth={2} rounded={false}>
		<Searcher />
		<div style={firstRowStyles}>
			<RadioButtonDefault />
			<TimeToPlay /> 
	    </div>
	  </Paper>
    </div>
);

export default SearchForm;
