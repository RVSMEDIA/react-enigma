import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () =>{
    return(
        <footer id="footer">
          <div className="footer-top">
           <div className="container">
            <div className="row">
             <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                    <h3>RVS</h3>
                    <p>
                      A108 Adam Street
                      <br/>
                      NY 535022, USA
                      <br/><br/>
                      <strong>Phone:</strong>
                      +1 5589 55488 55
                      <br/>
                      <strong>Email:</strong>
                      info@rvsmedia.com
                    </p>
                    <div className="social-links mt-3"> 
                     <NavLink to="https://twitter.com/" className="twitter"><i className="bi bi-twitter"></i></NavLink>
                     <NavLink to="https://www.facebook.com/" className="facebook"><i className="bi bi-facebook"></i></NavLink>
                     <NavLink to="https://www.instagram.com/" className="instagram"><i className="bi bi-instagram"></i></NavLink>
                     <NavLink to="https://www.skype.com/en/get-skype/" className="google-plus"><i className="bi bi-skype"></i></NavLink>
                     <NavLink to="https://www.linkedin.com/" className="linkedin"><i className="bi bi-linkedin"></i></NavLink>
                    </div>
                </div>
             </div>
             <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                    <li>
                     <NavLink to="/"><i className="bi bi-chevron-right"></i>Home</NavLink>
                    </li>
                    <li>
                     <NavLink to="/work"><i className="bi bi-chevron-right"></i>Work</NavLink>
                    </li>
                    <li>
                     <NavLink to="/ecommerce"><i className="bi bi-chevron-right"></i>eCommerce</NavLink>
                    </li>
                    <li>
                     <NavLink to="/seo"><i className="bi bi-chevron-right"></i>SEO</NavLink>
                    </li>
                    <li>
                     <NavLink to="/about"><i className="bi bi-chevron-right"></i>About</NavLink>
                    </li>
                </ul>
             </div>
             <div className="col-lg-2 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                    <li>
                     <NavLink to="#"><i className="bi bi-chevron-right"></i>Web Design</NavLink>
                    </li>
                    <li>
                     <NavLink to="#"><i className="bi bi-chevron-right"></i>Web Development</NavLink>
                    </li>
                    <li>
                     <NavLink to="#"><i className="bi bi-chevron-right"></i>Product Management</NavLink>
                    </li>
                    <li>
                     <NavLink to="#"><i className="bi bi-chevron-right"></i>Marketing</NavLink>
                    </li>
                    <li>
                     <NavLink to="#"><i className="bi bi-chevron-right"></i>Graphic Design</NavLink>
                    </li>
                </ul>
             </div>
             <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <form action="" method="post"> 
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe"  />
                </form>
             </div>
            </div>
           </div>
        </div>
      </footer>
    )
}
export default Footer;