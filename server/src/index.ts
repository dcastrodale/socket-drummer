const Ws = require('ws');

const wss = new Ws.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    ws.send(`Received: ${message} at ${new Date().toISOString()}`);
  });
});
