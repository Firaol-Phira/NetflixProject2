import React, { useRef } from "react";
import BannerImage from "../../assets/BannerImage.jpg";
import "./Banner.css";

function Banner() {
  const emailRef = useRef(null);

  const handleGetStarted = () => {
    if (!emailRef.current.value) {
      emailRef.current.focus();
      return;
    }

    // Continue when email is entered
    console.log("Email:", emailRef.current.value);
  };
  return (
    <div className="banner">
      <img className="banner__image" src={BannerImage} alt="Netflix Banner" />

      <div className="banner__overlay"></div>

      {/* ONLY the center text */}
      <div className="banner__content">
        <h1>Entertainment for every moment</h1>

        <p className="banner__price">Starts at USD 2.99. Cancel anytime.</p>

        <p className="banner__description">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="banner__form d-flex flex-column flex-md-row gap-2">
          <input
            ref={emailRef}
            type="email"
            placeholder="Email address"
            required
          />

          <button type="button" onClick={handleGetStarted}>
            Get Started <span>›</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
