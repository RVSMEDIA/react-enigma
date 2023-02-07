import React from "react";
import { NavLink } from "react-router-dom";
const Social = () => {
    return (
      <div className="social"> 
        <NavLink to="https://twitter.com/" className="twitter"><i className="bi bi-twitter"></i></NavLink>
        <NavLink to="https://www.facebook.com/" className="facebook"><i className="bi bi-facebook"></i></NavLink>
        <NavLink to="https://www.instagram.com/" className="instagram"><i className="bi bi-instagram"></i></NavLink>
        <NavLink to="https://www.skype.com/en/get-skype/" className="google-plus"><i className="bi bi-skype"></i></NavLink>
        <NavLink to="https://www.linkedin.com/" className="linkedin"><i className="bi bi-linkedin"></i></NavLink>
      </div>
    )
}

export default Social;