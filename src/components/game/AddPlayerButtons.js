import React from 'react';
import AddPlayerButton from './AddPlayerButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import addPlayerStyles from '../styles/addPlayerStyles';

function addPlayerButtons() {
	const menuItems = [
    <MenuItem primaryText="Refresh" />,
    <MenuItem primaryText="Send feedback" />,
    <MenuItem primaryText="Settings" />,
    <MenuItem primaryText="Help" />,
    <MenuItem primaryText="Sign out" />
	];
  return (
    <div>
      <IconMenu
        iconButtonElement={
        <IconButton>
          <AddPlayerButton secondary="true"
            positionStyle={addPlayerStyles.playerOne} />
        </IconButton>
        }
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        style={addPlayerStyles.playerOne}
      >
				{menuItems.map(element => element)}
      </IconMenu>
      <AddPlayerButton secondary="true"
        positionStyle={addPlayerStyles.playerTwo}/>
      <AddPlayerButton secondary="true"
        positionStyle={addPlayerStyles.playerThree}/>
      <AddPlayerButton secondary="true"
        positionStyle={addPlayerStyles.playerFour}/>
      <AddPlayerButton secondary="true"
        positionStyle={addPlayerStyles.playerFive}/>

      <AddPlayerButton
        positionStyle={addPlayerStyles.playerSix}/>
      <AddPlayerButton
				positionStyle={addPlayerStyles.playerSeven}/>
			<IconMenu
        iconButtonElement={
        <IconButton>
          <AddPlayerButton
            positionStyle={addPlayerStyles.playerEight} />
        </IconButton>
        }
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
        style={addPlayerStyles.playerEight}
      >
				{menuItems.map(element => element)}
      </IconMenu>
      <AddPlayerButton
        positionStyle={addPlayerStyles.playerNine}/>
      <AddPlayerButton
        positionStyle={addPlayerStyles.playerTen}/>
    </div>
  )
}

export default addPlayerButtons;
