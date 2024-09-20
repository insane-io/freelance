import React, { useEffect, useState, useRef } from 'react';

const SOCKET_SERVER_URL = 'ws://localhost:8001/ws/chat/8/';  // Django Channels WebSocket URL

const App = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {type: "response", text: "Hello", time: "12:00"}
  ]);

  const socket = useRef(null);  // Store the WebSocket connection

  useEffect(() => {
    // Initialize WebSocket connection
    socket.current = new WebSocket(SOCKET_SERVER_URL);

    // Handle WebSocket open event
    socket.current.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    // Handle WebSocket message event
    socket.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Received message:", data);

      const newMessage = {
        type: 'response',
        text: data.message,
        time: new Date().toLocaleTimeString('en-US', { hour12: false }),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    // Handle WebSocket error event
    socket.current.onerror = (error) => {
      console.log("WebSocket error:", error);
    };

    // Handle WebSocket close event
    socket.current.onclose = (event) => {
      console.log("WebSocket connection closed:", event);
    };

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socket.current.close();
    };
  }, []);

  const handleChat = () => {
    if (message.trim()) {
      const newMessage = {
        type: 'message',
        text: message,
        time: new Date().toLocaleTimeString('en-US', { hour12: false }),
      };

      // Send message through WebSocket
      socket.current.send(JSON.stringify({ message }));

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage('');
    }
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="flex h-[38.9rem]">
      {/* Left chat list panel */}
      <div className="w-1/4 border-r border-gray-200 bg-white overflow-y-auto">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Chats</h2>
        </div>
      </div>

      {/* Main chat panel */}
      <div className="flex-1 flex flex-col bg-gray-100">
        <div className="p-4 flex justify-between items-center bg-white border-b border-gray-200">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full"
              src="/path/to/profile.jpg"
              alt="Profile"
            />
            <div className="ml-3">
              <h3 className="text-gray-900 font-semibold">ILLe Venda</h3>
              <span className="text-sm text-green-500">Online</span>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 bg-white overflow-y-auto">
          {messages.map((msg, index) =>
            msg.type === 'message' ? (
              <div key={index} className="flex justify-end mb-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                  <p className="text-sm">{msg.text}</p>
                  <span className="text-xs text-gray-200 block text-right mt-1">{msg.time}</span>
                </div>
              </div>
            ) : (
              <div key={index} className="flex justify-start mb-4">
                <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs">
                  <p className="text-sm">{msg.text}</p>
                  <span className="text-xs text-gray-600 block text-right mt-1">{msg.time}</span>
                </div>
              </div>
            )
          )}
        </div>

        <div className="sticky bottom-0 p-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Write a message..."
              value={message}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500"
            />
            <button onClick={handleChat} className="ml-2 p-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3v7l15 2-15 2v7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
