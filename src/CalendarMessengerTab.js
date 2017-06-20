import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

const bottomRight = {
	position: 'fixed', 
	width: 400,
	bottom: 0, 
	right: 0
}

const CalendarMessengerTab = () => (
	  <Tabs style={bottomRight}>
	    <Tab
	      icon={<FontIcon className="material-icons">phone</FontIcon>}
	      label="RECENTS"
	    />
	    <Tab
	      icon={<FontIcon className="material-icons">favorite</FontIcon>}
	      label="FAVORITES"
	    />
	    <Tab
	      icon={<MapsPersonPin />}
	      label="NEARBY"
	    />
	  </Tabs>

);

export default CalendarMessengerTab;
