import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const LinkComponent = ({ icon, to, text, customClass }) => {
  return (
    <Link to={to} className={`nav-link ${customClass}`}>
      {icon && <img src={icon} alt={`${text} icon`} className="" />}
      <span>{text}</span>
    </Link>
  );
};

export default LinkComponent;
