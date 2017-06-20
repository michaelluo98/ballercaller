import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

const bottomRight = {
	position: 'fixed', 
	width: 475,
	top: 100,
	right: 50
}


const CalendarMessengerTab = () => (
	  <Tabs style={bottomRight}>
	    <Tab
	      icon={<FontIcon className="material-icons">favorite</FontIcon>}
	      label="FAVORITES"
	    >
			<div>
				<h1>Test</h1>
			</div>

		  </Tab>
	    <Tab
	      icon={<MapsPersonPin />}
	      label="NEARBY"
	    />
	  </Tabs>

);

export default CalendarMessengerTab;
