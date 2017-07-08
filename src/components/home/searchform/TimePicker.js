import React from 'react';
import TimePicker from 'material-ui/TimePicker';

const style = {
  width: '80%',
	height: '48px'
}

const TimeInput = ({onChange}) => (
  <div style={{width: '50%', paddingLeft: '0px'}}>
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
