import aboutimage from './images/about.jpg';
import List from './component/List';
import HeroSection from './component/HeroSection';
import { useProductContext } from './context/ProductContext';
import FeaturedProducts from './component/FeaturedProducts';
const Home = () =>{
  const {myName} = useProductContext();
  const headingdata = {
    headingname : "Plan. Launch. Grow."
  }
  const subheading = {
    subheadingdata : "We are team of talented designers making websites with RVS"
  }
  return( 
    <>
    {myName}
    <HeroSection tagh1 = {headingdata} tagsubheading = {subheading}/>
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
       <FeaturedProducts/>
    </main>
    </>
  )
}

export default Home;