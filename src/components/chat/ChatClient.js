import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as sessionActions from '../../actions/sessionActions';
import ChatPopup from "./ChatPopup";
import ChatSidebar from "./ChatSidebar";
import chatStyles from '../styles/chatStyles';
import Popover from 'material-ui/Popover/Popover';
import RaisedButton from 'material-ui/RaisedButton';

const ActionCable = require('actioncable');
const ACApp = {};
ACApp.cable = ActionCable.createConsumer('ws://localhost:3000/cable')

const BASE_URL = 'http://localhost:3000/api/v1';
const API_KEY = "472ae3d392ae9778f4d7601948113dad046ce1a9fbe6d539ef341a16742d71ae";

// Implementation is hidden in sessionActions
class ChatClient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messagesTyped: {},
      open: false,
    };
		this.chats = {}; 

    // Bind class functions
    this.addUser = this.addUser.bind(this);
    this.setUserOffline = this.setUserOffline.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.openChat = this.openChat.bind(this);
    this.closeChat = this.closeChat.bind(this);

		this.setUpSubscription = this.setUpSubscription.bind(this);
    this.handleMessengerToggle = this.handleMessengerToggle.bind(this);
  }

	componentDidMount() {
		this.props.sessionActions.getUserFriends(this.props.currentUserId);
		this.props.sessionActions.loadAllMessages(this.props.currentUserId);
		this.setUpSubscription();
	}

	// need to add onNewConnection: this.addUser 
	// onDisonnect: this.setUserOffline
	setUpSubscription() {
		ACApp.cable.subscriptions.create({channel: 'MessagesChannel',
			room_id: this.props.currentUserId}, {
				message_id: this.state.message_id,
				connected: function () {
					//Called when the subscription is ready for use on the server
					console.log('successfully established subscription connection');

				},

				disconnected: () => {
					// Called when the subscription has been terminated by the server
				},

				received: (data) => {
					// Called when theres incoming data on the websocket for this channel
					const {new_message} = data;
					this.props.sessionActions.addMessage(
						new_message.sender_id, new_message.recipient_id, 
						new_message.message, new_message.created_at, 
						this.props.currentUserId, this.props.messageHistory, 
						this.props.friends, this.props.openChats
					)
					//data is still a wrapper object
				}
			});
	}

  handleMessengerToggle = (event) => {
    this.setState({ open: !this.state.open });
  }

  /**
   * Add a new user to the chat list.
   * @param {object} user - A user object containing `username` and `id`
   */
	// ??? make sure to connect the dots on the addUser 
  addUser(user) {
		this.props.sessionActions.addUser(user)
    const users = this.props.users.slice();
    user.online = true;
    users.push(user);
    this.setState({users});
  }

  /**
   * Set a user's status to offline.
   * @param {string} userID
   */
  setUserOffline(userID) {
    const user = Object.assign({}, this.getUser(userID), {online: false});
    const users = this.state.users.filter(u => u.id !== userID);
    users.push(user);
    this.setState({users});
  }

  /**
   * Get a user from the list
   * @param {string} userID
   * @returns {object|null}
   */
  getUser(userID) {
    const users = this.props.friends.filter((u) => u.id === userID);
    return users.length ? users[0] : null;
  }

  /**
   * Update the current message being typed for a given chat
   * @param {string} chatID
   * @param {string} message
   */
  updateMessage(chatID, message) {
    const messagesTyped = this.state.messagesTyped;
    const newMessages = {};
    newMessages[chatID] = message;
    this.setState({messagesTyped: Object.assign({}, messagesTyped, newMessages)});
  }

  /**
   * Sends the current message typed out in the given chat
   * @param {string} chatID
   */
  sendMessage(chatID) {
    const message = this.state.messagesTyped[chatID];
    if (!message) return;
		this.props.sessionActions.sendMessage(
			this.props.currentUserId, chatID, message, this.props.messageHistory,
			this.props.friends, this.props.openChats
		);
    this.updateMessage(chatID, "", true);
  }

  /**
   * Opens a chat popup for a given user
   * @param {string} userID
   */
  async openChat(userID) {
		await this.props.sessionActions.openChat(this.props.openChats, this.props.friends, userID);
    this.chats[userID].handleFocus();
  }

  /**
   * Closes the chat popup for a given user
   * @param {string} userID
   */
  closeChat(userID) {
		this.props.sessionActions.closeChat(this.props.openChats, userID);
  }

  /**
   * Minimizes/maximizes the chat popup for a given user
   * @param {string} userID
   */
  toggleChat(userID) {
		this.props.sessionActions.toggleChat(this.props.friends, userID);
  }

  render() {
    const chatPopups = this.props.openChats.map((userID, i) => {
      const user = this.getUser(userID);
      const styles = {right: 250 + (275 * i) + 'px'}
      return (
				<ChatPopup
					key={i}
					name={user.first_name + ' ' + user.last_name}
					currentUserId={this.props.currentUserId}
          onType={(e) => this.updateMessage(userID, e.target.value)}
          onSend={() => this.sendMessage(userID)}
          onClose={() => this.closeChat(userID)}
          onMinimize={() => this.toggleChat(userID)}
          message={this.state.messagesTyped[userID]}
          history={this.props.messageHistory[userID]}
          online={user.status}
          minimized={user.minimized}
          style={styles}
					ref={(chat) => { this.chats[userID] = chat; }}
        />);
    });
    const onlineIcon = (
      <span style={chatStyles.chatOnlineIcon} />
    );

    return (
      <div className="chat-client">
        <RaisedButton
          onClick={this.handleMessengerToggle}
          label="Chat"
          icon={onlineIcon}
          style={{position: 'fixed', right: '10px', bottom: '0px', height: '25px', width: '225px'}}
          labelStyle={{textTransform: 'capitalize'}}
        />
        {this.state.open ?
          <ChatSidebar
            users={this.props.friends}
            onClickUser={this.openChat}
						handleMessengerToggle={this.handleMessengerToggle} 
						minimized={this.state.open} /> :
          <div></div>
        }
        {chatPopups}
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
	const {
		currentUserId, 
		friends, 
		openChats, 
		messageHistory, 
	} = state.session;
	return {
		currentUserId,
		friends,
		openChats, 
		messageHistory, 
	}
}

function mapDispatchToProps(dispatch) {
	return {
		sessionActions: bindActionCreators(sessionActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatClient)
