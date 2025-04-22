import React, { useEffect } from 'react';
import image from "./assets/hanuman.jpg"; // Import image correctly

function App() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      input:focus {
        border: 2px solid blue !important;
        background-color: #e6f0ff;
        outline: none;
        box-shadow: 0 0 8px rgba(0, 123, 255, 0.6);
        transition: all 0.3s ease;
      }

      .hover-blur:hover {
        filter: blur(4px);
        transition: filter 0.3s ease;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <input
        type="text"
        placeholder="Click to focus"
        style={{
          padding: '10px',
          fontSize: '16px',
          border: '2px solid gray',
          borderRadius: '6px',
          marginBottom: '40px'
        }}
      />

      <h2 className="hover-blur">Hover over this text to blur!</h2>

      <img
        src={image}
        alt="Hanuman"
        className="hover-blur"
        style={{
          marginTop: '20px',
          borderRadius: '10px',
          width: '300px', // Adjust width here
          height: 'auto' // Maintain aspect ratio
        }}
      />
    </div>
  );
}

export default App;
