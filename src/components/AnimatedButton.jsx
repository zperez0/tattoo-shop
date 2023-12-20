import React, { useState } from "react";
import "./AnimatedButton.css"

function AnimatedButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`animated-button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Book
    </button>
  );
}

export default AnimatedButton