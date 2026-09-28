import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <div className="footerOuterContainer">
      <div className="footerInnerContainer ">
        <p>Question? Call 0800861997</p>
        <div className="footer_data row">
          <div className="col-12 col-md-6 col-lg-3">
            <ul>
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>SpeedTest</li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
              <li>Legal Notices</li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <ul>
              <li>Account</li>
              <li>Ways to Watch</li>
              <li>Corporate information</li>
              <li>Only on Netflix</li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <ul>
              <li>Media Center</li>
              <li>Terms of Use</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Footer
