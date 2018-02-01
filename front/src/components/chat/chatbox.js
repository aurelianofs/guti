import React from 'react'
import { connect } from 'react-redux'
import './chatbox.scss'

const ChatMsg = ({msg}) => (
  <p className="chatbox-msg">{msg}</p>
)

let ChatBox = ({messages}) => {

  const messagesNode = messages.map((msg) => {
    return (<ChatMsg key={msg.id} msg={msg.text}></ChatMsg>)
  });

  return (
      <div className="chatbox">{messagesNode}</div>
  );
}

const mapStateToProps = state => {
  return {
    messages: state.chat
  }
}

ChatBox = connect(mapStateToProps)(ChatBox);

export default ChatBox
