import React from "react";

const Tab = ({ title, isActive, onClick, word }) => {
  return (
    <div className={`tab-button ${isActive ? "active" : ""}`} onClick={onClick}>
      <div className="tabContent">
        <span>{title}</span>
        <p>{word}</p>
      </div>
    </div>
  );
};

export default Tab;
