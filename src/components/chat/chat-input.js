import React from 'react';
import './chat-input.scss'

const ChatInput = ({sendMessage}) => {

  let textInput = null;

  return (
    <div>
      <input className="chat-input" ref={ (input) => { textInput = input } } placeholder="Type a message..." onKeyPress={(event) => {
        if(event.key == 'Enter'){
          var message = textInput.value;
          sendMessage(message);
          textInput.value = '';
        }
      }} type="text"/>
    </div>
  )
}

export default ChatInput
