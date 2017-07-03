import React from 'react';
import TextField from 'material-ui/TextField';

function TextInput({multiline}) {
  const field = multiline == 'false' ?
    <TextField hintText="Game Name" fullWidth={true} /> :
    <TextField
      hintText="Extra Info"
      fullWidth={true}
      multiLine={true}
      rows={3}
      rowsMax={5}
    />
  return (
    <div>
      {field}
    </div>
  )
}
export default TextInput;
