import React, { Component } from 'react'

const ActionCable = require('actioncable');
//import {ActionCable} from 'actioncable';
 
const ACApp = {}; 
ACApp.cable = ActionCable.createConsumer('wss://localhost:3000/cable')
 

export default class ChatRoom extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			message: null, 
			message_id: 1
		}
		this.setUpSubscription = this.setUpSubscription.bind(this);
	}

  componentDidMount () {
  }

	setUpSubscription() {
		ACApp.cable.subscriptions.create('MessagesChannel', {
			message_id: this.state.message_id, 
			connected: function () {
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
                {this.state.messages.map((message) =>
									 <li key={message.id}>{message.body}</li>
                )}
              </ul>
              <input ref='newMessage' type='text' />
              <button onClick={this.sendMessage}>Send</button>
            </div>
        )
    }
}
