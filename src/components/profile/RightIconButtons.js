import React from 'react'; 

import styles from '../styles/profileStyle';
import {grey400} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const iconButtonElement = (
	  <IconButton
	    touch={true}
	    tooltip="more"
	    tooltipPosition="bottom-left" >
	    <MoreVertIcon color={grey400} />
	  </IconButton>

);

/*const RightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Quick Join</MenuItem>
    <MenuItem>Quick View</MenuItem>
    <MenuItem>Message Creator</MenuItem>
  </IconMenu>
);*/

function RightIconMenu() {
	return (
		<IconMenu 
			iconButtonElement={iconButtonElement}
			style={styles.rightIconButton}
		>
			<MenuItem>Quick Join</MenuItem>
			<MenuItem>Quick View</MenuItem>
			<MenuItem>Message Creator</MenuItem>
		</IconMenu>
	)

}

export default RightIconMenu;

