import React from 'react';
import TextField from 'material-ui/TextField';

const styles = {
	paddingLeft: '5px'
}				

function TextInput({multiline}) {
  const field = multiline === 'false' ?
		<TextField
			hintText="Game Name" 
			fullWidth={true}
			inputStyle={styles}
			hintStyle={styles}
			/> :
    <TextField
      hintText="Extra Info"
      fullWidth={true}
      multiLine={true}
      rows={3}
      rowsMax={5}
			inputStyle={styles}
			hintStyle={styles}
    />
  return (
    <div>
      {field}
    </div>
  )
}
export default TextInput;
