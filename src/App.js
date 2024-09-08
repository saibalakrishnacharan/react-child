import React, { useEffect } from 'react';

const App = ({ message }) => {
  // Effect to log the message prop (sent from Angular) when the component mounts
  useEffect(() => {
    console.log('Received from Angular:', message);
  }, [message]);

  // Function to send data back to Angular via a custom event
  const sendDataToAngular = () => {
    const event = new CustomEvent('messageFromReact', {
      detail: { data: '1' },
    });
    window.dispatchEvent(event); // Dispatch the custom event to be caught in Angular
  };

  return (
    <div>
      <h1>React Microfrontend</h1>
      <p>Message from Angular: {message}</p>
      <button onClick={sendDataToAngular}>Send Data to Angular</button>
    </div>
  );
};

export default App;