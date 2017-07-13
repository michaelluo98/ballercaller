import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as gameActions from '../../../actions/gameActions';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey400} from 'material-ui/styles/colors';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const menuButtonStyle = {
  position: 'absolute',
  display: 'block',
  top: '12px',
  right: '4px'
}

const iconButtonElement = (
    <IconButton
      touch={true}
      tooltip="more"
      tooltipPosition="top-left"
    >
      <MoreVertIcon color={grey400} />
    </IconButton>

);

//onItemTouchTap

class RightIconMenu extends Component {
  constructor(props, context) {
    super(props, context);

		this.handleTouch = this.handleTouch.bind(this);
		this.handleOpenModal = this.handleOpenModal.bind(this);
  }

	handleTouch() {
		this.props.actions.quickJoinGame(this.props.currentUser, this.props.gameId)
		this.props.handleOpen();
	}

	handleOpenModal(e) {
		this.props.handleOpenModal(e.currentTarget.id, this.props.listGame);
	}

  render() {
    return (
			<IconMenu
				iconButtonElement={iconButtonElement} 
				style={menuButtonStyle}
				touchTapCloseDelay={1}>
				<MenuItem 
					onTouchTap={this.handleOpenModal}
					id={this.props.gameId}>
					Quick View
				</MenuItem>
        <MenuItem onTouchTap={this.handleTouch}>Quick Join</MenuItem>
        <MenuItem>Message Creator</MenuItem>
      </IconMenu>
    )
  }
}

function mapStateToProps(state, ownProps) {
	const {currentUser} = state.session
	return {
		currentUser
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(gameActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RightIconMenu);
