import React from "react";
import bigcommerce_image from '../images/bigcommerce.png';
import shopify_image from '../images/shopify.png';
import salesforce_image from '../images/salesforce.png';
import wooceommerce_image from '../images/wooceommerce.png';
const Card = () => {
    return (
      <>
      <div className="col-xl-3 col-md-6 d-flex align-items-stretch"> 
        <div className="icon-box">
          <div className="icon">
            <i className="bi bi-1-circle"></i>
          </div>
          <h6><a href="https://rvslivenew.idevelopment.site/magento-2-development/">Magento eCommerce Development</a></h6>
          <p>If there’s a platform that’s widely used, then it’s none other than Magento. It comes with exceptional features and helps you create attractive websites.<br/><br/>This scalable solution is all you need to strengthen your eCommerce business. Moreover, it is suitable for all kinds of enterprises.</p>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 d-flex align-items-stretch"> 
        <div className="icon-box">
          <div className="icon">
            <img src={bigcommerce_image} alt="" className="img-fluid"/>
          </div>
          <h6><a href="https://rvslivenew.idevelopment.site/bigcommerce-development/">BigCommerce Development</a></h6>
          <p>Bigcommerce is popular for its cloud eCommerce platform. Also, it’s well known for its flexible APIs and low-cost ownership.<br/><br/>It offers you a set of tools that come with a lot of top-notch features. You can create a seamless web store using this platform.</p>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 d-flex align-items-stretch"> 
        <div className="icon-box">
          <div className="icon">
          <img src={shopify_image} alt="" className="img-fluid"/>
          </div>
          <h6><a href="https://rvslivenew.idevelopment.site/shopify-development/">Shopify eCommerce Development</a></h6>
          <p>Shopify is an outstanding eCommerce software in the whole industry. It lets you create attractive and creative websites. <br/><br/> Shopify also allows you to focus on the user experience. Not only this, but it handles everything else quite well.</p>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 d-flex align-items-stretch"> 
        <div className="icon-box">
          <div className="icon">
          <img src={salesforce_image} alt="" className="img-fluid"/>
          </div>
          <h6><a href="https://rvslivenew.idevelopment.site/salesforce-development/">Salesforce Development</a></h6>
          <p>Shopify is an outstanding eCommerce software in the whole industry. It lets you create attractive and creative websites. <br/><br/> Shopify also allows you to focus on the user experience. Not only this, but it handles everything else quite well.</p>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-5"> 
        <div className="icon-box">
          <div className="icon">
          <img src={wooceommerce_image} alt="" className="img-fluid"/>
          </div>
          <h6><a href="https://rvslivenew.idevelopment.site/woocommerce-development/">WooCommerce Development</a></h6>
          <p>WooCommerce is a free WordPress plugin. Also, a customisable eCommerce website development platform. It allows the merchants to convert their websites into attractive online stores. <br/><br/> Moreover, WooCommerce offers various other paid features too. It is suitable for small-sized businesses.</p>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-5"> 
        <div className="icon-box">
          <div className="icon">
           <i className="bi bi-6-circle"></i>
          </div>
          <h6><a href="https://rvslivenew.idevelopment.site/contact-us/">eCommerce Platform Integrations</a></h6>
          <p>We have collaborated with various top-tier third-party solutions that accredit your business. Also, we develop unique and tailored eCommerce integration for all eCommerce businesses.</p>
        </div>
      </div>
      </>
      
    )
}

export default Card;