import React,{useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi';
import { CgClose, CgMenu } from 'react-icons/cg';

const Header = () =>{
    const [menuIcon,setmenuIcon] = useState();
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
           <nav id="navbar" className={menuIcon ? "navbar active" : "navbar"}>
             <ul className="navbar-lists">
              <li><NavLink to="/work">Work</NavLink></li>
              <li><NavLink to="/ecommerce">eCommerce</NavLink></li>
              <li><NavLink to="/seo">SEO</NavLink></li>
              <li><NavLink to="/products">PRODUCTS</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/cart" className="cart-trolley--link"><FiShoppingCart className="cart-trolley"/><span className="cart-total--item">1</span></NavLink></li>
            </ul>
            <div className="mobile-navbar-btn">
                <CgMenu name="menu-outline" className="mobile-nav-icon" onClick={()=>setmenuIcon(true)}/>
                <CgClose name="close-outline" className="mobile-nav-icon close-outline" onClick={()=>setmenuIcon(false)}/>
            </div>
           </nav>
        </div>
      </header>
    )
}
export default Header;