import React, {Component} from 'react';
import AddPlayerButton from './AddPlayerButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

class AddPlayerMenu extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleOnItemTouchTap = this.handleOnItemTouchTap.bind(this)
  }

  renderMenuItems() {
    return (
      this.props.favorites.map((player, index)=> {
        const fullName = `${player.first_name} ${player.last_name}`;
        return <MenuItem
                  primaryText={fullName}
                  playerNum={this.props.playerNum}
                  name="yah"
                  player={player}
                  teamNum={this.props.teamNum}
              />
      })
    )
  }

  handleOnItemTouchTap(e) {
    setTimeout(this.props.handleChange(e), 300)
    // this.props.handleChange()
  }

  render() {
    return (
      <IconMenu
        iconButtonElement={
					<IconButton>
						<AddPlayerButton
							secondary={this.props.secondary}
							positionStyle={this.props.playerStyle}
							player={this.props.player}
						/>
					</IconButton>
        }
        style={this.props.playerStyle}
				onItemTouchTap={this.props.handleChange}
        touchTapCloseDelay={100}
        maxHeight={300}
      >
				{this.renderMenuItems()}
      </IconMenu>
    )
  }
}

export default AddPlayerMenu;
