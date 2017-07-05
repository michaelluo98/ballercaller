import React from 'react';
import DatePicker from 'material-ui/DatePicker';

const style = {
  width: '90%',
	height: '40px'
}

const DateInput = ({onChange}) => (
  <div style={{width: '100%'}}>
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
