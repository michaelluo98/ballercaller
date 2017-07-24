import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

const bottomRight = {
	position: 'fixed', 
	width: '470px',
	top: '100px',
	right: '45px'
}


const CalendarMessengerTab = () => (
	  <Tabs style={bottomRight}>
	    <Tab
	      label="FAVORITES"
	    >
			<div>
				<h1>Test</h1>
			</div>
		  </Tab>
	    <Tab
	      label="NEARBY"
	    />
	  </Tabs>

);

export default CalendarMessengerTab;
