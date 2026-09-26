import React from "react";
import "./header.css";
import NetflixLogo from "../../assets/netflixlogo.svg";
function Header(){
    return(
        <>
        <div className="outerContainer">
            <div className="headLeft">
                <img src={NetflixLogo} alt="Netflix Logo"
                width="100" />

            </div>
            <div className="headRight">
                <a href="#" > <button>Sign in</button></a>
               
            </div>

        </div>
        
        
        </>
    )
}
export default Header;