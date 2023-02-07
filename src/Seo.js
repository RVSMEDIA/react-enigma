import React from "react";
import { NavLink } from "react-router-dom";
import seoinner from './images/seo-inner.jpg';
const Seo = () =>{
  return( 
    <>
      <div className="breadcrumbs">
        <div className="page-header d-flex align-items-center">
           <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2>SEO</h2>
                  <p>
                  SEO is now the talk of the town! Yes, One can’t even think of surviving in this online world without SEO. Wondering how to begin with SEO? Don’t worry! Explore plenty of opportunities for the organic growth of your business with the UK’s leading, innovative and growing SEO agency.
                  </p>
                </div>
              </div>
           </div>
        </div>
        <nav>
          <div className="container">
            <ol>
              <li><NavLink to ="/">Home</NavLink></li>
              <li><NavLink to ="/seo">Seo</NavLink></li>
            </ol>
          </div>
        </nav>
      </div>
      <section className="work-inner seo-inner" id="work-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 position-relative align-self-start order-lg-last order-first text-end">
              <img src={seoinner} alt="aboutinner" className="img-fluid"/>
            </div>
            <div className="col-lg-6 content order-last order-lg-first">
             <h2>Leverage Your Online Business<br/>With London’s Best SEO Agency</h2>
             <p> Looking for the best SEO agency in London? If yes, then we are right here for you! Our main aim is to make you stand out in the online world. We assist the big brands and small scale businesses to engage more, master search and attract more customers online. But the point is ‘HOW’? SEO is the answer to all your questions. We combine various tested SEO strategies and tactics to help your business gain more website traffic, and conversions as well. Moreover, our custom SEO strategies focus on both off-page as well as on-page SEO.</p>
             <h4>Our team of SEO expert will help you out in the following ways. They will:</h4>
             <ul>
              <li><i className="bi bi-check-circle"></i>Build an exceptional SEO strategy</li>
              <li><i className="bi bi-check-circle"></i>Assist you in ranking higher on SERPs</li>
              <li><i className="bi bi-check-circle"></i>Make your website visible to a large audience</li>
              <li><i className="bi bi-check-circle"></i>Boost up your leads and conversions</li>
              <li><i className="bi bi-check-circle"></i>Help you in increasing your ROI</li>
             </ul>
            </div>
          </div>
        </div>
      </section>
      <section id ="cta" className="cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 text-center text-lg-start">
              <h3>We are only one call away</h3>
              <p>Book a call with us because our professionals are waiting to hear from you!</p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center">
             <span className="cta-btn align-middle">Call To Action</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Seo;