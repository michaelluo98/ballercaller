import React, {Component} from 'react';
import AddPlayerButton from './AddPlayerButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import AddPlayerMenuItems from './AddPlayerMenuItems';

class AddPlayerMenu extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

    }
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
      >
				{this.props.favorites.map((player, index)=> {
					const fullName = `${player.first_name} ${player.last_name}`;
					return <MenuItem 
										primaryText={fullName}
										playerNum={this.props.playerNum}
										name="yah"
										player={player}
										teamNum={this.props.teamNum}
								/>
				})}
      </IconMenu>
    )
  }
}

export default AddPlayerMenu;
