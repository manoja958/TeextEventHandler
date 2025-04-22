import React, { useState } from 'react';
function UpdateText() {
  const [text, setText] = useState("Hello! Click the button to update this text.");

  const handleClick = () => {
    setText("You clicked the button! 🎉");
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{text}</h2>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}
export default UpdateText;
