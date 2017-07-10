import React from 'react';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey400} from 'material-ui/styles/colors';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const iconButtonElement = (
    <IconButton
      touch={true}
      tooltip="more"
      tooltipPosition="bottom-left"
    >
      <MoreVertIcon color={grey400} />
    </IconButton>

);


//onItemTouchTap

function RightIconMenu({gameId}) {
	return (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem>Quick View</MenuItem>
      <MenuItem>Quick Join</MenuItem>
      <MenuItem>Message Creator</MenuItem>
    </IconMenu>
	)
}


export default RightIconMenu;
