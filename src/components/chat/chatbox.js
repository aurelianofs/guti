import React from 'react';
import './chatbox.scss'

const ChatMsg = ({msg}) => (
  <p className="chatbox-msg">{msg}</p>
)

const ChatBox = ({messages}) => {

  const messagesNode = messages.map((msg) => {
    return (<ChatMsg msg={msg}></ChatMsg>)
  });

  return (
      <div className="chatbox">{messagesNode}</div>
  );
}

export default ChatBox
