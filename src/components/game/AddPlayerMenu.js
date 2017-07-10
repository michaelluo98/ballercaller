import React, {Component} from 'react';
import AddPlayerButton from './AddPlayerButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import addPlayerStyles from '../styles/addPlayerStyles';
import AddPlayerMenuItems from './AddPlayerMenuItems';
import FontAwesome from 'react-fontawesome';

class AddPlayerMenu extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

    }
		this.renderButton = this.renderButton.bind(this)
  }
	renderButton() {
		if (this.props.player) {
			return <div><FontAwesome
							className='super-crazy-colors'
							name='rocket'
							size='2x'
							spin
							style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'  }}
						/></div>
		}
		else {
			return <AddPlayerButton
							secondary={this.props.secondary}
							positionStyle={this.props.playerStyle}
							player={this.props.player}
						/>
		}
	}

  render() {
    const playerNum = this.props.playerNum;
    return (
      <IconMenu
        iconButtonElement={
        <IconButton>
					{this.renderButton()}
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
