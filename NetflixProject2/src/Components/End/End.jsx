import React , { useRef }  from 'react'
import "./End.css"
function End() {
      const emailRef = useRef(null);
    
      const handleGetStarted = () => {
        if (!emailRef.current.value) {
          emailRef.current.focus();
          return;
        }
    }
  return (
    <div className='end'>
      <p>
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
  );
}

export default End
