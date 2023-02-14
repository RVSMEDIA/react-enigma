import React from 'react'

function HeroSection({tagh1,tagsubheading}) {
    const {headingname} = tagh1;
    const {subheadingdata} = tagsubheading;
  return (
    <>
        <section id="hero">
          <div className="hero-container">
            <h1>{headingname}</h1>
            <h2>{subheadingdata}</h2>
            <div className="d-flex"> 
              <a href="/about" className="btn-get-started scrollto">Get Started</a> 
              <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video">
              <i className="bi bi-play-circle"></i>
               <span>Watch Video</span>
             </a>
          </div>
        </div>
    </section>
    </>
  )
}

export default HeroSection