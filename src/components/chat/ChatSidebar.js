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
      <div className="chat-sidebar" style={styles.chatSidebar}>
        <ul style={styles.chatSidebarList}>
          {this.props.users.map((user, i) =>
            <li key={i} style={styles.chatSidebarList}>
              <button
                onClick={() => this.props.onClickUser(user.id)}
                style={styles.chatSidebarButton}>
                <span
                  className="chat-sidebar--username">{user.username}
                </span>
                <span
                  className={`chat-status ${user.online ? "online" : "offline"}`}
                  style={styles.chatStatusOnline}>
                </span>
              </button>
            </li>
          )}
        </ul>
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
