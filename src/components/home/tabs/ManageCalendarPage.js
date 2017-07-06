import React, {Component} from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once

// Render the Calendar
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

class Calendar extends Component {
  render() {
    return (
			<div style={{position: 'fixed', top: '100px', right: '50px'}}>
				<InfiniteCalendar
					width={460}
					height={200}
					selected={today}
					disabledDays={[0,6]}
					minDate={lastWeek}
					displayOptions={{
						layout: 'landscape', 
						showHeader: false
					}}
				/>
			</div>
    )
  }
}

export default Calendar;
