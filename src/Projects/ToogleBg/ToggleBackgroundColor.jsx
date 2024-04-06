import React, { useState } from "react";
import "./index.css";

function ToggleBackgroundColor() {
  // Define state variables for background color, text color, and button style
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  // Function to handle button click and toggle theme
  function handleClick() {
    // Toggle background color between white and black
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    // Toggle text color between black and orange
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    // Toggle button style between white and black
    setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
  }

  // Render component with dynamic styles based on state
  return (
    <section style={{ backgroundColor, color: textColor }}>
      {/* Button to toggle theme */}
      <button
        onClick={handleClick}
        style={{
          backgroundColor: buttonStyle, // Set button background color based on state
          color: textColor, // Set button text color based on state
          border: `2px solid ${textColor}`, // Set border color based on text color
        }}
      >
        {/* Display text based on background color */}
        {backgroundColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>
      {/* Content section */}
      <section className="content">
        <h1>
          Welcome To A <br /> Real World..
        </h1>
      <p>Created and Designed by <span><a href="https://github.com/Uwihanganyeobed" style={{color:'green'}}>Obed Uwihanganye</a> </span></p>

      </section>
    </section>
  );
}

export default ToggleBackgroundColor;
