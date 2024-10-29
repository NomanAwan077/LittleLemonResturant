import React from "react";
import "./style.css";

const ClientReview = ({ client }) => {
  return (
    <div className="review-wrapper">
      <img src={client.srcImg} />
      <h4>{client.name}</h4>
      <p className="description">{client.description}</p>
    </div>
  );
};
export default ClientReview;
