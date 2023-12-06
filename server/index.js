// Use import instead of require
import http from 'http';
import { Server } from 'socket.io';

// Use const for the server and io variables
const server = http.createServer();
const io = new Server(server, {
    cors: { origin: "*" }
});

// Use arrow functions instead of function expressions
io.on('connection', socket => {
    console.log('a user connected');

    socket.on('message', message => {
        console.log(message, 'backend');
        io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
    });
});

// Use template literals instead of string concatenation
server.listen(8080, () => console.log(`listening on http://localhost:8080`));



// Regular Websockets

// const WebSocket = require('ws')
// const server = new WebSocket.Server({ port: '8080' })

// server.on('connection', socket => { 

//   socket.on('message', message => {

//     socket.send(`Roger that! ${message}`);

//   });

// });



