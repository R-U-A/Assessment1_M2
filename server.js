const http = require('http');
const debug = require("debug")("node-angular");
const app = require('./chatroom/backend/app');

const PORT = 3000;

app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT);