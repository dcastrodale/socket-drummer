import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { BassDrum } from "components/Instruments/BassDrum";

interface Socket {
  socket: null | WebSocket;
}

function App() {
  const [socketStatus, setSocketStatus] = useState("CLOSED");
  const [message, setMessage] = useState<null | string>(null);
  const socketRef = useRef({ socket: null } as Socket);

  const handleMessage = (msg: string) => {
    setMessage(msg);
  };

  useEffect(() => {
    let socket: WebSocket;

    const connectToWebsocket = async () => {
      socketRef.current.socket = new WebSocket("ws://localhost:8080");
      socket = socketRef.current.socket;

      socket.addEventListener("open", () => {
        console.log("connection open");
        setSocketStatus("OPEN");
      });

      socket.addEventListener("close", () => {
        console.log("Closing socket");
        setSocketStatus("CLOSED");
      });

      socket.addEventListener("message", (event) => {
        handleMessage(event.data);
      });
    };

    if (socketStatus === "CLOSED") {
      connectToWebsocket();
    }

    return () => {
      if (socketStatus === "OPEN") {
        socket.close?.();
      }
    };
  }, [socketStatus]);

  const handleClick = () => {
    if (socketStatus === "OPEN") {
      const { socket } = socketRef.current;
      socket?.send("Click event");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {message && <h1>{message}</h1>}
        <button onClick={handleClick}>Click me</button>
        <BassDrum />
      </header>
    </div>
  );
}

export default App;
