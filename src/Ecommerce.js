import React from "react";
import { NavLink } from "react-router-dom";
import Card from "./component/Card";
const Ecommerce = () =>{
  return( 
    <>
    <div className="breadcrumbs">
        <div className="page-header d-flex align-items-center">
           <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2>Ecommerce</h2>
                  <p>
                  We are an award-winning eCommerce development company with top-notch expertise in utilising modern technologies to drive business goals. We build eCommerce websites that bring a difference in businesses and offer seamless shopping experiences.
                  </p>
                </div>
              </div>
           </div>
        </div>
        <nav>
          <div className="container">
            <ol>
              <li><NavLink to ="/">Home</NavLink></li>
              <li><NavLink to ="/ecommerce">Ecommerce</NavLink></li>
            </ol>
          </div>
        </nav>
      </div>
      <section className="et-section" id="et-section">
         <div className="container">
          <div className="section-title">
            <h2>ROI Focused eCommerce Development</h2>
            <p>Our team of eCommerce developers helps you in designing unique and engaging websites. Our approach allows us to create effective and powerful eCommerce sites. This helps in boosting up your engagement.Also, it keeps you on top of your competition.</p>
          </div>
          <div className="row">
            <Card/>
          </div>
         </div>
      </section>
      {/* <section className="case-studio" id="case-studio">
        <div className="container">
          <div className="section-title">
            <h2>Case Studies</h2>
            <p>We are very pleased to say that we have helped so many clients worldwide. If our accomplishments interest you, then you can tap here.</p>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Ecommerce;