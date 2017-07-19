import React from 'react';
import TextField from 'material-ui/TextField';

const styles = {
	paddingLeft: '10px',
	main: {
		height: '48px'
	}
}

function TextInput({multiline, onChange}) {
  return (
    <div style={{paddingLeft: '15px'}}>
			<TextField
				hintText="Game Name"
				fullWidth={true}
				inputStyle={styles}
				hintStyle={styles}
				name="name"
				onChange={onChange}
				style={styles.main}
				/>
    </div>
  )
}
export default TextInput;
