import React from "react";
import BannerImage from "../../assets/BannerImage.jpg";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img className="banner__image" src={BannerImage} alt="Netflix Banner" />

      <div className="banner__overlay"></div>
    
     {/* ONLY the center text */}
      <div className="banner__content">

        <h1>Entertainment for every moment</h1>

        <p className="banner__price">
          Starts at USD 2.99. Cancel anytime.
        </p>

        <p className="banner__description">
          Ready to watch? Enter your email to create or restart your
          membership.
        </p>

        <div className="banner__form">

          <input
            type="email"
            placeholder="Email address"
          />

          <button>
            Get Started <span>›</span>
          </button>

        </div>

      </div>
      </div>
  );
}

export default Banner;
