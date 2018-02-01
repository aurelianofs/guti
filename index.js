const http = require('http')
const url = require('url')
const WebSocket = require('ws')

const express = require('express')
const app = express()

app.use(express.static('front'))
app.get('/', (req, res) => res.sendFile(__dirname+'/front/index.html'))

const server = http.createServer(app)
const wss = new WebSocket.Server({ server })

wss.on('connection', (ws, req) => {
  const location = url.parse(req.url, true)

  ws.on('message', (message) => console.log('received: %s', message))

  ws.send('something');
})

server.listen(3000, () => console.log('Listening on %d', server.address().port))
