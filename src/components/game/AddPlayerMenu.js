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
        <AddPlayerMenuItems />
      </IconMenu>
    )
  }
}

export default AddPlayerMenu;