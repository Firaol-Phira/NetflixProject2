import React from "react";
import "./transition.css";

const Transition = () => {
  return (
    <div className="transition">
      <svg
        className="transition__curve"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="curveColor" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c51b73" />
            <stop offset="50%" stopColor="#ff003c" />
            <stop offset="100%" stopColor="#c51b73" />
          </linearGradient>
        </defs>

        <path
          d="M0,70 Q720,20 1440,70"
          fill="none"
          stroke="url(#curveColor)"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
};

export default Transition;
