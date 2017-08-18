import React, {Component} from "react";
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux';

import * as sessionActions from '../../actions/sessionActions';
import ChatPopup from "./ChatPopup";
import ChatSidebar from "./ChatSidebar";
import styles from '../../styles/chatStyles.css'

const ActionCable = require('actioncable');
const ACApp = {}; 
ACApp.cable = ActionCable.createConsumer('ws://localhost:3000/cable')

const BASE_URL = 'http://localhost:3000/api/v1';
const API_KEY = "472ae3d392ae9778f4d7601948113dad046ce1a9fbe6d539ef341a16742d71ae";
// todo: 
// 1. need to seperate API calls? loadAllMessages, sendMessageAPI?
// 2. why is the created_at being received from the API undefined? 

class ChatClient extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      users: this.props.friends || [],
			openChats: [], // arr of chatIDs
			messageHistory: {}, // obj w/ chatID keys, and arr of msg objs 
      messagesTyped: {},
    };
    this.chats = {};

    // Bind class functions
    this.addUser = this.addUser.bind(this);
    this.setUserOffline = this.setUserOffline.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.openChat = this.openChat.bind(this);
    this.closeChat = this.closeChat.bind(this);

		this.setUpSubscription = this.setUpSubscription.bind(this);
		this.loadAllMessages = this.loadAllMessages.bind(this);
		this.sendMessageAPI = this.sendMessageAPI.bind(this);
    // Initialize API with event callbacks
    // this.API = new ChatAPI({
    //   onReceiveMessage: this.addMessage,
    //   onNewConnection: this.addUser,
    //   onDisconnect: this.setUserOffline,
    // });
    //
    // this.API.connect();
  }

	componentDidMount() {
		this.props.sessionActions.getUserFriends(this.props.currentUserId);
		this.loadAllMessages();
		this.setUpSubscription();
	}
	
	componentWillReceiveProps(nextProps) {
		if (this.props.friends.length !== nextProps.friends.length) {
			//console.log('changing the state of the users !!!');
			this.setState({users: nextProps.friends})
		}
		// ??? this.setState({messageHistory: nextProps.messages})
		//console.log('cahnging the state of the messageHistory!!!');
	}

	loadAllMessages() {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`
		})
		fetch(`${BASE_URL}/friendships/${this.props.currentUserId}/directmessages`, {headers})
			.then(res => {
				return res.json();
			})	
			.then(res => {
				console.log('messages in loadAllMessages: ', res.messages);
				this.setState({messageHistory: res.messages});
			})
	}

	sendMessageAPI(currentUserId, recipientId, message) {
		console.log('--------- in sendMessageAPI');
			const headers = new Headers({
				'Authorization':`Apikey ${API_KEY}`,
				'Accept':'application/json',
				'Content-Type':'application/json'
			})
		fetch(`${BASE_URL}/friendships/${currentUserId}/${recipientId}/directmessages/send`, {
			headers,
			method: 'POST',
			body: JSON.stringify({message: message})
		})
		.then(res => res.json()).then(res => {
			console.log('res in sendMessageAPI: ', res.message)
			this.addMessage(res.message.sender_id, res.message.recipient_id, res.message.message, res.created_at);
		})
	}


	setUpSubscription() {
		ACApp.cable.subscriptions.create('MessagesChannel', {
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
				//console.log('received data from subscription: ', data);
				//console.log('state after: ', this.state);
				//data is still a wrapper object
			}
		});
	}

  /**
   * Add a new user to the chat list.
   * @param {object} user - A user object containing `username` and `id`
   */
  addUser(user) {
    const users = this.state.users.slice();
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
    const users = this.state.users.filter((u) => u.id === userID);
    return users.length ? users[0] : null;
  }

  /**
   * Adds a message to the chat history
   * @param {string} sender - the userID of the message's sender
   * @param {string} recipient - the userID of the message's recipient
   * @param {string} content - the message itself
   * @param {number} timestamp - the unix time of the message
   */
  addMessage(sender_id, recipient_id, message, created_at) {
		console.log('in addMessage, created_at: ', created_at);
    const history = this.state.messageHistory;
		// history, newHistory: objects for each chat, with key of 
		//     recipient (chatID)
		// chat: array of messages
    const newHistory = {};
    const chatID = (sender_id !== this.props.currentUserId) ? recipient_id : sender_id;
		// either creating a new chat or appending to old chat
    const chat = history[chatID] ? history[chatID].slice() : [];
    chat.push({sender_id, recipient_id, message, created_at});
    newHistory[chatID] = chat;
		/*console.log('oldHistory in addMessage', history);
		console.log('history to add in addMessage: ', newHistory);
		console.log('newHistory in addMessage', Object.assign({}, history, newHistory));*/

    const users = this.state.users.slice();
    const openChats = this.state.openChats.slice();

		// unless receiving data from API, sender will not be equal to currentUser
		if (sender_id.toString() !== this.props.currentUserId) {
			if (!this.getUser(sender_id)) { // receiving message from non-friend
        users.push(sender_id);
      }
			// add new message from nonfriend to openChats
			if (this.state.openChats.indexOf(sender_id) == -1) { 
        openChats.push(sender_id);
      }
    }

		this.setState({ // sending/receiving from new user  
			messageHistory: Object.assign({}, history, newHistory), 
			openChats,
			users,
		});

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
		console.log('message being receiving from updateMessage: ', message);
		console.log('newMessages in updateMessage: ', newMessages);
    this.setState({messagesTyped: Object.assign({}, messagesTyped, newMessages)});
  }

  /**
   * Sends the current message typed out in the given chat
   * @param {string} chatID
   */
  sendMessage(chatID) {
    const message = this.state.messagesTyped[chatID];
    if (!message) return;
		this.sendMessageAPI(this.props.currentUserId, chatID, message)
    this.updateMessage(chatID, "", true);
  }

  /**
   * Opens a chat popup for a given user
   * @param {string} userID
   */
  openChat(userID) {

    const chatIdx = this.state.openChats.indexOf(userID);
    const openChats = this.state.openChats.slice();

    if (chatIdx === -1) {
      openChats.push(userID);
    }

    const users = this.state.users.slice();
    const user = this.getUser(userID);
    user.minimized = false;

    this.setState({openChats, users}, () => {
      this.chats[userID].handleFocus();
    });
  }

  /**
   * Closes the chat popup for a given user
   * @param {string} userID
   */
  closeChat(userID) {
    const chatIdx = this.state.openChats.indexOf(userID);
    if (chatIdx == -1) return;
    const openChats = this.state.openChats.slice();
    openChats.splice(chatIdx, 1);
    this.setState({openChats});
  }

  /**
   * Minimizes/maximizes the chat popup for a given user
   * @param {string} userID
   */
  toggleChat(userID) {
    const user = this.getUser(userID);
    const users = this.state.users.slice();
    user.minimized = !user.minimized;
    this.setState({users});
  }

  render() {
    const chatPopups = this.state.openChats.map((userID, i) => {
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
          history={this.state.messageHistory[userID]}
          online={user.status}
          minimized={user.minimized}
          style={styles}
          ref={(chat) => {this.chats[userID] = chat;}}
        />);
    });

    return (
      <div className="chat-client">
        <ChatSidebar users={this.state.users} onClickUser={this.openChat} />
        {chatPopups}
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
	const {currentUserId, friends} = state.session; 
	return {
		currentUserId, 
		friends,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		sessionActions: bindActionCreators(sessionActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatClient)
