//var socket = new WebSocket('ws://localhost:8080');

import './scss/app.scss'
import React from 'react'
import { render } from 'react-dom'
import Chat from './chat/chat'

const App = () => (
  <main>
    <h1>Hello, world!</h1>
    <Chat />
  </main>
)

export default App
