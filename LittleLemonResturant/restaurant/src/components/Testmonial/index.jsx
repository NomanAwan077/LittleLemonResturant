import React from "react";
import "./style.css";
import ClientReview from "../ClientReviews";
import reviewer1 from "../../asset/images/revewier-1.png";
import reviewer2 from "../../asset/images/reviewer-2.png";
import reviewer3 from "../../asset/images/reviewer-3.png";

const TestmonialSection = () => {
  const clientDetail = [
    {
      id: 1,
      srcImg: reviewer1,
      name: "Andrew Hill",
      description:
        "My family and I had a fantastic day at the Little Lemon Restaurant celebrating my birthday. The ambience of the restaurant created a warm and inviting setting that was ideal for the big occasion. The healthful and savory meal options satisfied both my taste senses and my adherence to healthy eating.",
    },
    {
      id: 2,
      srcImg: reviewer2,
      name: "Robin Mathews",
      description:
        "Hosting my official meeting with a client at the Little Lemon Restaurant was a brilliant choice. The restaurant's sophisticated ambiance set the perfect tone for our discussions. The combination of professional atmosphere and delectable cuisine made for a successful and enjoyable business encounter.",
    },
    {
      id: 3,
      srcImg: reviewer3,
      name: "Sarah",
      description:
        "My family and I had a fantastic day at the Little Lemon Restaurant celebrating my birthday. The ambience of the restaurant created a warm and inviting setting that was ideal for the big occasion. The healthful and savory meal options satisfied both my taste senses and my adherence to healthy eating.",
    },
  ];
  return (
    <div className="testmonial-wrapper">
      <h2 className="title">Testimonials</h2>
      <div className="grid-adjustable-columns grid-col-3">
        {clientDetail.map((client) => (
          <ClientReview client={client} />
        ))}
      </div>
    </div>
  );
};
export default TestmonialSection;
