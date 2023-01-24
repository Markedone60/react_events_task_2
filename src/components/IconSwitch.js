import React from "react";

export default function IconSwitch(props) {
  const { icon, onSwitch } = props;

  return (
    <div className="icon-switch">
      <button className="switch-btn" onClick={onSwitch}>
        <span className="icons">{icon}</span>
      </button>
    </div>
  )
}