import React, {Component} from 'react';
import ChatClient from './chat/ChatClient';
//import ChatRoom from './ChatRoom';


class TestPage extends Component {
  render () {
    return (
			<div>
        <ChatClient />
      </div>
    )
  }
}

export default TestPage;
