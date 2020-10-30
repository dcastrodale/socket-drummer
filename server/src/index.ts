import Ws from "ws";

const wss = new Ws.Server({ port: 8080 });

const connections = [];

wss.on("connection", (ws): void => {
  connections.push(ws);
  ws.on("message", (message): void => {
    connections.forEach((connection: Ws) => {
      connection.send(`Received: ${message} at ${new Date().toISOString()}`);
    });
  });
});
