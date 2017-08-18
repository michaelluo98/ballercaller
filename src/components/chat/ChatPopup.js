import React, {Component} from "react";
import {findDOMNode} from "react-dom";
import styles from '../../styles/chatStyles.css'

export default class ChatPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.handleMinimize = this.handleMinimize.bind(this);
  }

  handleFocus() {
		console.log('in handleFocus'); 
    this.setState({focus: true}, () => {
      const node = findDOMNode(this.refs.messageInput);
      if (node) {
        node.focus();
      }
    });
  }

  handleBlur() {
    this.setState({focus: false});
		console.log('in handleBlur');
  }

  handleClose(e) {
    e.stopPropagation();
		console.log('in handleClose');
    this.props.onClose();
  }

  handleMinimize(e) {
		console.log('---------------in handleMinimize');
    e.stopPropagation();
    this.props.onMinimize();

    if (!this.props.minimized) {
      this.handleBlur();
    } else {
      this.handleFocus();
    }
  }

  handleSend(e) {
    e.preventDefault();
		e.stopPropagation();
    this.props.onSend();
  }

  render() {
    const messageIsEmpty = (this.props.message == "");

		const receivedMessageHistory = this.props.history || [] 

    let messageHistory = receivedMessageHistory.map((msg, i) =>
			<li key={i} className={`${msg.recipient_id === parseInt(this.props.currentUserId) 
					? "received" : "sent"}`}>
        <span className="chat-popup--message">
          {msg.message}
        </span>
      </li>
    );

    return (
      <div className={`chat-popup ${this.props.minimized ? "minimized" : ""}`}
        style={this.props.style}
        onClick={this.handleFocus}
        onBlur={this.handleBlur}
      >
        <header className={this.state.focus ? "active" : ""} onClick={this.handleMinimize}>
          <span className={`chat-status ${this.props.online ? "online" : "offline"}`}></span>
          <span>{this.props.name}</span>
          <span className="chat-popup--close" onClick={this.handleClose}></span>
        </header>
        {!this.props.minimized &&
          <div>
            <div className="chat-popup--messages">
              <ul>{messageHistory}</ul>
            </div>
            <form>
              <input
                type="text"
                value={this.props.message}
                onChange={this.props.onType}
                onFocus={this.handleFocus}
                ref="messageInput"
              />
              {messageIsEmpty && <span className="chat-popup--placeholder">Type your message</span>}
              <button
                type="submit"
                onClick={this.handleSend}
                disabled={messageIsEmpty}>
                  Send
              </button>
            </form>
          </div>
        }
      </div>
    );
  }
}

// ChatPopup.defaultProps = {
//   history: [],
//   message: "",
//   online: true,
// };
//
// ChatPopup.propTypes = {
//   name: React.PropTypes.string,
//   history: React.PropTypes.array,
//   message: React.PropTypes.string,
//??   currentUserId: React.PropTypes.number?,
//   online: React.PropTypes.bool,
//   onType: React.PropTypes.func,
//   onSend: React.PropTypes.func,
//   onClose: React.PropTypes.func,
//   onMinimize: React.PropTypes.func,
// }
