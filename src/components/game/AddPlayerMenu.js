import React, {Component} from 'react';
import AddPlayerButton from './AddPlayerButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import addPlayerStyles from '../styles/addPlayerStyles';
import AddPlayerMenuItems from './AddPlayerMenuItems';

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
        style={playerStyle}
      >
        <AddPlayerMenuItems />
      </IconMenu>
    )
  }
}

export default AddPlayerMenu;
