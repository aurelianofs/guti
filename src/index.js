//var socket = new WebSocket('ws://localhost:8080');

import './scss/app.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/chat/chat';

ReactDOM.render(
  <main>
    <h1>Hello, world!</h1>
    <Chat></Chat>
  </main>,
  document.getElementById('root')
);
