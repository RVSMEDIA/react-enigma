import React from "react";
import { NavLink } from "react-router-dom";
import aboutinner from './images/about-inner.jpg';
const Work = () =>{
  return( 
    <>
      <div className="breadcrumbs">
        <div className="page-header d-flex align-items-center">
           <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2>Work</h2>
                  <p>
                     Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
                  </p>
                </div>
              </div>
           </div>
        </div>
        <nav>
          <div className="container">
            <ol>
              <li><NavLink to ="/">Home</NavLink></li>
              <li><NavLink to ="/work">Work</NavLink></li>
            </ol>
          </div>
        </nav>
      </div>
      <section className="work-inner" id="work-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
              <img src={aboutinner} alt="aboutinner" className="img-fluid"/>
            </div>
            <div className="col-lg-6 content order-last order-lg-first">
             <h3>Work</h3>
             <p> Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.</p>
             <ul>
              <li><i className="bi bi-diagram-3"></i><div><h5>Ullamco laboris nisi ut aliquip consequat</h5><p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p></div></li>
              <li><i className="bi bi-fullscreen-exit"></i><div><h5>Magnam soluta odio exercitationem reprehenderi</h5><p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p></div></li>
              <li><i className="bi bi-broadcast"></i><div><h5>Voluptatem et qui exercitationem</h5><p>Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam</p></div></li>
             </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Work;