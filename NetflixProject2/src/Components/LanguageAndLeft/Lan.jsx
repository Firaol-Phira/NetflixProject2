import React, { useState } from "react";
import "./Lan.css";

function Lan() {
  const [open, setOpen] = useState(false);
 const handleGetStarted = () =>  {
          emailRef.current.focus();
          return;
        }
  return (
    <>
      <div className="netflixLanguage">
        <button
          className="netflixLanguageBtn"
          onClick={() => {
            (setOpen(!open), handleGetStarted);
          }}
        >
          <span>文A</span>
          <span>English</span>
          <span className="languageArrow">▼</span>
        </button>

        {open && (
          <div className="netflixLanguageMenu">
            <div className="netflixLanguageItem">English</div>
          </div>
        )}
      </div>
      <div className="TheEnd">
        <b>Netflix Ethiopia</b>
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </div>
    </>
  );
}

export default Lan;
