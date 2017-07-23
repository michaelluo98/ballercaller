import React, {Component} from 'react'; 
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as gameActions from '../../actions/gameActions';

import styles from '../styles/profileStyle';
import {grey400} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

const iconButtonElement = (
	  <IconButton
	    touch={true}
	    tooltip="more"
	    tooltipPosition="bottom-left" >
	    <MoreVertIcon color={grey400} />
	  </IconButton>

);


class RightIconMenu extends Component {
	constructor(props, context) {
		super(props, context); 

		this.handleOpenModal = this.handleOpenModal.bind(this);
	}

	handleOpenModal() {
		this.props.handleOpenModal(this.props.gameId)
	}

	render() {
		return (
			<IconMenu 
				iconButtonElement={iconButtonElement}
				style={styles.rightIconButton}>
				<MenuItem>Quick Join</MenuItem>
				<MenuItem
					onTouchTap={this.handleOpenModal} >
					Quick View
				</MenuItem>
				<MenuItem>Message Creator<CommunicationChatBubble /></MenuItem>
			</IconMenu>
		)
	}
	
}


function mapStateToProps(state, ownProps) {
	return {

	}
}

function mapDispatchToProps(dispatch) {
	return {
		gameActions: bindActionCreators(gameActions, dispatch), 

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(RightIconMenu);
