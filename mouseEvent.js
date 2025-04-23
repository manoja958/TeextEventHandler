//Write a program to display a message using onMouse event handlers
import React, { useState } from 'react';
function App() {
  const [message, setMessage] = useState("");
  const handleMouseOver = () => {
    setMessage("You are hovering over the text!");
  };
  const handleMouseOut = () => {
    setMessage("");
  };
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          display: 'inline-block',
          padding: '20px',
          border: '2px solid blue',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '24px',
          color: 'blue',
          backgroundColor: '#f0f8ff',
        }}
      >
        Hover over this text
      </div>

      <p>{message}</p>
    </div>
  );
}

export default App;
