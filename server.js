//required modules/packages
const http = require('http');
const debug = require("debug")("node-angular");
const app = require('./chatroom/backend/app');
const sockets = require("./chatroom/backend/socket");
const cors = require("cors");

const PORT = 3000;

// io declaration

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:4200/chat",
    methods: ["GET", "POST"],
  },
});


// set port for app

app.set('port', PORT);


//  create server
const server = http.createServer(app);


//listen for connections and requests from front
sockets.connect(io, PORT);
server.listen(PORT);