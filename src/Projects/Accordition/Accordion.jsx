import React, { useState } from "react";
import "./Accordion.css";

// Functional component for Accordion
const Accordion = ({ title, content }) => {
  // State to track whether accordion is active or not
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="accordion-card" key={Math.random()}>
      {/* Header section */}
      <div className="header" onClick={() => setIsActive(!isActive)}>
        {/* Title of the accordion */}
        <div>{title}</div>
        {/* Icon to indicate the state of the accordion */}
        <p className="icon">{isActive ? "-" : "+"}</p>
      </div>

      {/* Content section */}
      <div className="content">
        {/* Display content only if accordion is active */}
        {isActive && <p className="card-info">{content}</p>}
      </div>
    </section>
  );
};

export default Accordion;
