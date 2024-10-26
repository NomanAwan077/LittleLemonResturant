import React from "react";
import "./style.css";

const ButtonComponent = ({ icon, text, onClick, outlined, contained }) => {
  const baseClasses = "btn";
  const outlinedClasses = "outline";
  const containedClasses = "filled";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${outlined ? outlinedClasses : ""} ${
        contained ? containedClasses : ""
      }`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default ButtonComponent;
