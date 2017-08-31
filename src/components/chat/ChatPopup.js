import React, {Component} from "react";
import {findDOMNode} from "react-dom";
// eslint-disable-next-line
import styles from '../../styles/chatStyles.css'

//todo: onupdate of new message need to be able to scroll to the bottom 

export default class ChatPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.handleMinimize = this.handleMinimize.bind(this);
		this.scrollToBottom = this.scrollToBottom.bind(this);
  }

	componentDidUpdate() {
		this.scrollToBottom();
	}

  handleFocus() {
    this.setState({focus: true}, () => {
      const node = findDOMNode(this.refs.messageInput);
      if (node) {
        node.focus();
      }
    });
  }

  handleBlur() {
    this.setState({focus: false});
  }

  handleClose(e) {
    e.stopPropagation();
    this.props.onClose();
  }

  handleMinimize(e) {
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

	scrollToBottom() {
		// this way is preferable to using findDOMNode, which attaches to 
		//		underlying DOM nodeand pierces component abstraction & 
		//		it must already be mounted
		if (!this.props.minimized) {
			const scrollHeight = this.messagesContainer.scrollHeight;
			const height = this.messagesContainer.clientHeight;
			const maxScrollTop = scrollHeight - height;
			this.messagesContainer.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
		}
	}

  render() {
    const messageIsEmpty = (this.props.message === "");

		const receivedMessageHistory = this.props.history || [] 

    let messageHistory = receivedMessageHistory.map((msg, i) =>
			<li key={i} className={`${msg.recipient_id === parseInt(this.props.currentUserId, 10) 
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
						<div className="chat-popup--messages" ref={(el) => { this.messagesContainer = el; }}>
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
