import aboutimage from './images/about.jpg';
import List from './component/List';

const Home = () =>{
  return( 
    <>
      <section id="hero">
       <div className="hero-container">
          <h1>Plan. Launch. Grow.</h1>
          <h2>We are team of talented designers making websites with RVS</h2>
          <div className="d-flex"> 
            <a href="/about" className="btn-get-started scrollto">Get Started</a> 
             <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video">
              <i className="bi bi-play-circle"></i>
               <span>Watch Video</span>
             </a>
          </div>
        </div>
    </section>
    <main id ="main">
       <section id="about" className="about">
          <div className="container">
              <div className="row p-4">
                <div className="col-lg-6 video-box">
                  <img className="img-fluid" src={aboutimage} alt="" />
                </div>
                <div className='col-lg-6 pt-3 pt-lg-0 content'>
                 <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                 <List/>
                </div>
              </div>
          </div>
       </section>
    </main>
    </>
  )
}

export default Home;