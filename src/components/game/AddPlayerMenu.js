import React, {Component} from 'react';
import AddPlayerButton from './AddPlayerButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import AddPlayerMenuItems from './AddPlayerMenuItems';

class AddPlayerMenu extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

    }
  }

  render() {
		console.log('playerNum in IconMenu: ', this.props.playerNum);
		console.log('team in IconMenu: ', this.props.team);
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
      >
				<AddPlayerMenuItems 
					playerNum={this.props.playerNum}
					team={this.props.team}
					handleChange={this.props.handleChange}
				/>
      </IconMenu>
    )
  }
}

export default AddPlayerMenu;
