const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 5000;

app.get('/', (req, res) => {
    res.send('Server running...');
})


io.on('connection', (socket) => {
    console.log('USER CONNECTED:');
    console.log(socket.id);
})

server.listen(port, console.log("Server listening on port: " + port));