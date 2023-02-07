import React,{useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () =>{
    const [headerClassName, setHeaderClassName] = useState('');
    const handleScroll =(headerClassName) =>{
        if(headerClassName !=='header-scrolled' && window.pageYOffset >=70) {
            setHeaderClassName('header-scrolled');
        }else if(headerClassName  ==='header-scrolled' && window.pageYOffset < 70){
            setHeaderClassName('');
        }
    }
    React.useEffect(()=>{
        window.onscroll = () =>handleScroll(headerClassName);
    },[headerClassName])
    return(
        <header id="header" className={`fixed-top ${headerClassName}`}>
          <div className="container d-flex align-items-center justify-content-between">
           <h1 className="logo"><a href="/">RVS</a></h1>
           <nav id="navbar" className="navbar">
             <ul>
              <li><NavLink to="/work">Work</NavLink></li>
              <li><NavLink to="/ecommerce">eCommerce</NavLink></li>
              <li><NavLink to="/seo">SEO</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
           </nav>
        </div>
      </header>
    )
}
export default Header;