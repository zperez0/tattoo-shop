import React, { useState } from "react";
import "./AnimatedButton.css"

// WIP: not sure if I want to use this button on the homepage.
// might add to contact instead.

function AnimatedButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`animated-button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Book Now
    </button>
  );
}

export default AnimatedButton