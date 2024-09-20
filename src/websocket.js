const WebSocketHandler = (url, onMessage, onOpen, onClose) => {
  const socket = new WebSocket(url);

  socket.onopen = () => {
    console.log('WebSocket connection established');
    if (onOpen) onOpen();
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (onMessage) onMessage(data);
  };

  socket.onclose = () => {
    console.log('WebSocket connection closed');
    if (onClose) onClose();
  };

  return {
    send: (message) => socket.send(JSON.stringify(message)),
    close: () => socket.close()
  };
};

export default WebSocketHandler;
