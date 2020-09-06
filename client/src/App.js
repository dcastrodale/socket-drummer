import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [socketStatus, setSocketStatus] = useState('CLOSED');
  const [message, setMessage] = useState(null);
  const socketRef = useRef({ socket: null });

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  useEffect(() => {
    const connectToWebsocket = async () => {
      socketRef.current.socket = new WebSocket('ws://localhost:8080');
      const { socket } = socketRef.current;

      socket.addEventListener('open', () => {
        console.log('connection open');
        setSocketStatus('OPEN');
      });

      socket.addEventListener('close', () => {
        console.log('Closing socket');
        setSocketStatus('CLOSED');
      });

      socket.addEventListener('message', (event) => {
        handleMessage(event.data);
      });
    };

    if (socketStatus === 'CLOSED') {
      connectToWebsocket();
    }

    return () => {
      socketStatus === 'OPEN' && socketRef.current.close();
    };
  }, [socketStatus]);

  const handleClick = () => {
    if (socketStatus === 'OPEN') {
      const { socket } = socketRef.current;
      socket.send('Click event');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {message && <h1>{message}</h1>}
        <button onClick={handleClick}>Click me</button>
      </header>
    </div>
  );
}

export default App;
