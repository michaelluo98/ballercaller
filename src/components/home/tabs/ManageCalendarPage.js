import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once

// Render the Calendar
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

const style = {
	position: 'fixed',
	top: '100px', 
	right: '45px'
}

class Calendar extends Component {
  render() {
    return (
			<Paper style={style} zDepth={1} rounded={false}>
				<InfiniteCalendar
					width={470}
					height={230}
					selected={null}
					minDate={lastWeek}
					displayOptions={{
						layout: 'landscape', 
						showHeader: false
					}}
				/>
			</Paper>
    )
  }
}


/*<InfiniteCalendar
  Component={withMultipleDates(Calendar)}
	selected={[
		    new Date(2017, 6, 29),
		    new Date(),
		    new Date(2017, 7, 16)
		  
	]}
  interpolateSelection={defaultMultipleDateInterpolation}
/>*/

export default Calendar;
