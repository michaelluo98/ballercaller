import React from 'react';
import ChatSidebar from './chat/ChatSidebar';

//id, username, online
const testUsers = [
  {id: 1, username: "test1", online: "online"},
  {id: 2, username: "test2", online: "offline"},
  {id: 3, username: "test3", online: "online"},
  {id: 4, username: "test4", online: "offline"},
]

// ChatSidebar defaultProps: onClickUser, users

function TestPage() {
  return (
    <div>
      <ChatSidebar users={testUsers} />
    </div>
  )
}

export default TestPage;
