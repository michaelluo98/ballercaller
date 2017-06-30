import React from 'react';
import {ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
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

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem>Quick View</MenuItem>
      <MenuItem>Quick Join</MenuItem>
      <MenuItem>Message Creator</MenuItem>
    </IconMenu>
);

function GameListRow(props) {
  return (
    <ListItem
      leftAvatar={<Avatar src="images/jason_face2.png" />}
      rightIconButton={rightIconMenu}
      primaryText="Example Address"
      secondaryText={
        <p>
          <span style={{color: darkBlack}}>Format: 3v3 | Time: 10:00pm | Indoor/Outdoor </span><br />
        </p>
      }
      secondaryTextLines={1}
    />

  )
}

export default GameListRow;
