import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Searcher from './SearchBar';

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

const SearchForm = () => (
    <div>
      <Paper style={style} zDepth={2} rounded={false}>
		<Searcher />
		<TextField hintText="Middle name" style={fieldStyle} underlineShow={false} />
		<Divider />
		<TextField hintText="Last name" style={fieldStyle} underlineShow={false} />
		<Divider />
		<TextField hintText="Email address" style={fieldStyle} underlineShow={false} />
		<Divider />
		
	  </Paper>			
    </div>
);

export default SearchForm;
