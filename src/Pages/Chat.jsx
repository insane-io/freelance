import React, { useEffect, useState } from 'react';
import WebSocketHandler from '../websocket';
import axios from 'axios';

const Chat = ({ roomId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [websocket, setWebSocket] = useState(null);
  const [roomName, setRoomName] = useState('');

  useEffect(() => {
    // Fetch the room name
    const fetchRoomName = async () => {
      const response = await axios.get(`http://127.0.0.1:8000/chat/chatrooms/`, {
        headers: {
          Authorization: localStorage.getItem('access_token')
            ? 'Bearer ' + localStorage.getItem('access_token')
            : null,
          'Content-Type': 'application/json',
          accept: 'application/json',
        }, 
      });
      const data = await response.json();
      setRoomName(data.room_name);
    };

    fetchRoomName();

    // Set up WebSocket connection
    const ws = WebSocketHandler(`ws://localhost:8001/ws/chat/8/`, (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    setWebSocket(ws);

    return () => {
      if (ws) ws.close();
    };
  }, [roomId]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      websocket.send({ message: newMessage, sender: 'User1' }); // Replace 'User1' with actual sender
      setNewMessage('');
    }
  };

  return (
    <div>
      <h2>{roomName}</h2>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;
