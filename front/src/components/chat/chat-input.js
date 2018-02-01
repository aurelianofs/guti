import React from 'react'
import { addMessage } from '../../actions'
import { connect } from 'react-redux'
import './chat-input.scss'

let ChatInput = ({ dispatch }) => {

  let input = null;

  return (
    <div>
      <input className="chat-input" ref={ node => { input = node }} placeholder="Type a message..." onKeyPress={(event) => {
        if(event.key == 'Enter'){
          var message = input.value;

          if (!message) return;

          dispatch(addMessage(message, 'aure'))
          input.value = '';
        }
      }} type="text"/>
    </div>
  )
}

ChatInput = connect()(ChatInput)

export default ChatInput
