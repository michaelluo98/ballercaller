import React from 'react';
import TimePicker from 'material-ui/TimePicker';

const style = {
  width: '90%',
	height: '40px'
}

const TimeInput = ({onChange}) => (
  <div style={{width: '100%'}}>
    <TimePicker
      hintText="Time"
      autoOk={true}
      minutesStep={15}
      textFieldStyle={style}
			hintStyle={{paddingLeft: '5px'}}
			onChange={onChange}
    />
  </div>
);

export default TimeInput;
