import React from 'react';
import ReactDOM from 'react-dom';
import ChatBox from './chatbox';
import ChatInput from './chat-input';
import './chat.scss'

class Chat extends React.Component {

  constructor (props) {

    super(props);

    this.state = {
      messages: []
    }
  }

  sendMessage (message) {

    this.state.messages.push(message);

    this.setState({messages: this.state.messages})
  }

  render () {
    return (
      <div className="chat-container">
        <ChatBox messages={this.state.messages}></ChatBox>
        <ChatInput sendMessage={this.sendMessage.bind(this)}></ChatInput>
      </div>
    );
  }
}

export default Chat
