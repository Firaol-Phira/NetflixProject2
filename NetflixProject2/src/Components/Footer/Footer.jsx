import React from 'react'
import "./footer.css"
function Footer() {
  return (
  
      <div className="footerOuterContainer">
        <div className="footerInnerContainer ">
          <h3>Question? Call 0800861997</h3>
          <div className="footer_data">
            <div>
              <ul>
                <li>FAQ</li>
                <li>Investor Relations</li>
                <li>Privacy</li>
                <li>SpeedTest</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
                <li>Legal Notices</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Account</li>
                <li>Ways to Watch</li>
                <li>Corporate information</li>
                <li>Only on Netflix</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media Center</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="language">
            <button>English</button>
          </div>
          <div className="Country"><b>Netflix Ethiopia</b></div>
          <div className='last'>
            <h3>This page is protected by Google reCAPTCHA to ensure you are not a bot.</h3>
          </div>

        </div>
      </div>
      );
  
}

export default Footer
