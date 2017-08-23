import React, {Component} from "react";
import {findDOMNode} from "react-dom";
// import styles from '../styles/chatStyles';
import styles from '../../styles/chatStyles.css'

export default class ChatSidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
			<div
				className="chat-sidebar" style={styles.chatSidebar}
			>
				<header 
					onClick={this.props.handleMessengerToggle}>
          <p className='chat-sidebar-header-name'>Chat</p>
        </header>
        <div className="chat-sidebar-list">
          <ul style={styles.chatSidebarList}>
            {this.props.users.map((user, i) =>
              <li key={i} style={styles.chatSidebarList}>
                <button
                  onClick={() => this.props.onClickUser(user.id)}
                  style={styles.chatSidebarButton}>
                  <span
  									className="chat-sidebar--username">
  									{user.first_name} {user.last_name}
                  </span>
                  <span
  									/* changed from user.online to user.status */
                    className={`chat-status ${user.status ? "online" : "offline"}`}
                    style={styles.chatStatusOnline}>
                  </span>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
//
// ChatSidebar.defaultProps = {
//   users: [],
// };
//
// ChatSidebar.propTypes = {
//   users: React.PropTypes.array,
//   onClickUser: React.PropTypes.func,
// }
