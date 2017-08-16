import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux';
import * as messageActions from '../actions/messageActions';

const ActionCable = require('actioncable');
const ACApp = {}; 
ACApp.cable = ActionCable.createConsumer('ws://localhost:3000/cable')
 

class ChatRoom extends Component {
	constructor(props) {
		super(props); 

		this.state = {
			message: 'lil uzi vert', 
			message_id: 1
		}
		this.setUpSubscription = this.setUpSubscription.bind(this);
	}

  componentDidMount () {
		// receives all messages for the currentUser
		this.props.messageActions.loadAllMessages(this.props.currentUserId)
		this.setUpSubscription();

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
				console.log('received data from subscription: ', data);
				//data is still a wrapper object
			}

		});
	}

  componentWillUnmount () {
  }

    /*onReceived (message) {
        this.setState({
            messages: [
                ...this.state.messages,
                message
            ]
        })
    }*/

    /*sendMessage = () => {
        const message = this.refs.newMessage.value
        // Call perform or send
        this.refs.roomChannel.perform('sendMessage', {message})
    }*/

    render () {
        return (
            <div>
              <ul>
								{/*this.state.messages.map((message) =>
									 <li key={message.id}>{message.body}</li>
								)*/}
								<li>{this.state.message}</li>
              </ul>
              <input ref='newMessage' type='text' />
              <button onClick={this.sendMessage}>Send</button>
            </div>
        )
    }
}

function mapStateToProps (state, ownProps) {
	const {currentUserId} = state.session;
	const {messages} = state.messages;
	return { 
		currentUserId,
		messages
	};
}

function mapDispatchToProps(dispatch) {
	return {
		messageActions: bindActionCreators(messageActions, dispatch), 
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);


