import React from 'react';
import TextField from 'material-ui/TextField';

const styles = {
	paddingLeft: '5px'
}				

function TextInput({multiline, onChange}) {
  const field = multiline === 'false' ?
		<TextField
			hintText="Game Name" 
			fullWidth={true}
			inputStyle={styles}
			hintStyle={styles}
			name="name"
			onChange={onChange}
			/> :
    <TextField
      hintText="Extra Info"
      fullWidth={true}
      multiLine={true}
      rows={2}
      rowsMax={5}
			inputStyle={styles}
			hintStyle={styles}
			name="extra_info"
			onChange={onChange}
    />
  return (
    <div>
      {field}
    </div>
  )
}
export default TextInput;
