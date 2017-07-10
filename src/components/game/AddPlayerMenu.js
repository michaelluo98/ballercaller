import React, {Component} from 'react';
import AddPlayerButton from './AddPlayerButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import addPlayerStyles from '../styles/addPlayerStyles';


const menuItems = [
  <MenuItem primaryText="Refresh" />,
  <MenuItem primaryText="Send feedback" />,
  <MenuItem primaryText="Settings" />,
  <MenuItem primaryText="Help" />,
  <MenuItem primaryText="Sign out" />
];

class AddPlayerMenu extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

    }
  }

  render() {
    const playerNum = this.props.playerNum;
    const playerStyle = this.props.playerStyle;
    console.log('playerNum: ', this.props.playerNum)
    console.log('playerStyle: ', playerStyle)
    return (
      <IconMenu
        iconButtonElement={
        <IconButton>
          <AddPlayerButton secondary={this.props.secondary}
            positionStyle={playerStyle} />
        </IconButton>
        }
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        style={playerStyle}
      >
        {menuItems.map(element => element)}
      </IconMenu>
    )
  }
}

export default AddPlayerMenu;
