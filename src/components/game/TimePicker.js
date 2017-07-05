import React from 'react';
import TimePicker from 'material-ui/TimePicker';

const style = {
  width: '90%',
}

const TimeInput = () => (
  <div style={{width: '100%'}}>
    <TimePicker
      hintText="Time"
      autoOk={true}
      minutesStep={15}
      textFieldStyle={style}
			hintStyle={{paddingLeft: '5px'}}
    />
  </div>
);

export default TimeInput;
