import { useProductContext } from "../context/ProductContext"
import Product from "./Product";
function FeaturedProducts() {
    const {isLoading,featureProducts} = useProductContext();
    if(isLoading){
        return <div>.....Loading</div>
    }
  return (
    <>
        <section id="featured-product" className="featured-product sections-bg">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                      <h2>Check Now!</h2>
                      <p>Our Feature Services</p>
                    </div>
                    {
                        featureProducts.map((curElem)=>{
                          return <Product key={curElem.id} {...curElem} />
                        })
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default FeaturedProducts