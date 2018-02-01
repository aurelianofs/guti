import React from 'react';
import ReactDOM from 'react-dom';
import ChatBox from './chatbox';
import ChatInput from './chat-input';
import './chat.scss'

const Chat = () => (
  <div className="chat-container">
    <ChatBox />
    <ChatInput />
  </div>
)

export default Chat
