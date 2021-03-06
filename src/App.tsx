import React, { useState } from "react";
// import logo from './logo.svg';

import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{
          backgroundColor: disabled ? "gray" : buttonColor,
        }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-check"
        defaultChecked={disabled}
        aria-checked={false}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-check">Disable button</label>
    </div>
  );
}

export default App;
