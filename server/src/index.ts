const Ws = require("ws");

const wss = new Ws.Server({ port: 8080 });

const connections = [];

wss.on("connection", function connection(ws) {
  connections.push(ws);
  ws.on("message", function incoming(message) {
    connections.forEach((connection) => {
      connection.send(`Received: ${message} at ${new Date().toISOString()}`);
    });
  });
});
