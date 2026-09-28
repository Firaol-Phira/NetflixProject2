import React from "react";
import "./row.css";

const Row = ({ title, description, icon }) => {
  return (
    <div className="reason-card">
      <div className="reason-card__content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="reason-card__icon">
        <i className={`bi ${icon}`}></i>
      </div>
    </div>
  );
};

export default Row;
