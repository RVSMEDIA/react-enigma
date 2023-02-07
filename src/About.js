import React from "react";
import { NavLink } from "react-router-dom";
const About = () =>{
  return( 
    <>
      <div className="breadcrumbs">
        <div className="page-header d-flex align-items-center">
           <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2>About</h2>
                  <p>
                    Relationships are the backbone of the world’s most successful businesses. Our mission is to build relationship with businesses and help them build their brands and achieve great results.
                  </p>
                </div>
              </div>
           </div>
        </div>
        <nav>
          <div className="container">
            <ol>
              <li><NavLink to ="/">Home</NavLink></li>
              <li><NavLink to ="/about">About</NavLink></li>
            </ol>
          </div>
        </nav>
      </div>
    </>
  )
}

export default About;