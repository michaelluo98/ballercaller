import React from 'react';
import DatePicker from 'material-ui/DatePicker';

const style = {
  width: '86%',
	height: '48px'
}

const DateInput = ({onChange}) => (
  <div style={{paddingLeft: '10px', width: '80%'}}>
		<DatePicker
			hintText="Date"
			mode="portrait"
			textFieldStyle={style}
			hintStyle={{paddingLeft: '5px'}}
			autoOk={true}
			onChange={onChange}
			name="date"
			className="date-picker"
		/>
  </div>
);

export default DateInput;
