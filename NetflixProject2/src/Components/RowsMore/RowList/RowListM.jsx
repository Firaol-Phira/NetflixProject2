import React from "react";
import Row from "../Row/Row";
import "./rowList.css";

const RowList = () => {
  const reasons = [
    {
      title: "Enjoy on your TV",
      description:
        "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      icon: "bi-tv-fill",
    },
    {
      title: "Download your shows to watch offline",
      description:
        "Save your favorites easily and always have something to watch.",
      icon: "bi-download",
    },
    {
      title: "Watch everywhere",
      description:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      icon: "bi-display",
    },
    {
      title: "Create profiles for kids",
      description:
        "Send kids on adventures with their favorite characters in a space made just for them.",
      icon: "bi-emoji-smile-fill",
    },
  ];

  return (
    <section className="row-list">
      <h1>More Reasons to Join</h1>

      <div className="row g-3">
        {reasons.map((reason, index) => (
          <div className="col-12 col-md-6 col-xl-3" key={index}>
            <Row
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RowList;
