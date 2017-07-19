import React from 'react';
import TextField from 'material-ui/TextField';

const styles = {
	paddingLeft: '5px',
	main: {
		height: '40px'
	}
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
			style={styles.main}
			/> :
    <TextField
      hintText="Extra Info"
      fullWidth={true}
      multiLine={true}
      rows={2}
      rowsMax={2}
			inputStyle={styles}
			hintStyle={styles}
			name="extra_info"
			onChange={onChange}
			textareaStyle={{marginTop: '10'}}
			style={{height: '80%'}}
    />
  return (
    <div>
      {field}
    </div>
  )
}
export default TextInput;
