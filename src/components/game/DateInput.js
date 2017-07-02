import React from 'react';
import DatePicker from 'material-ui/DatePicker';

const style = {
  width: '90%',
}

const DateInput = () => (
  <div style={{width: '100%'}}>
    <DatePicker hintText="Date" mode="portrait" textFieldStyle={style} />
  </div>
);

export default DateInput;
