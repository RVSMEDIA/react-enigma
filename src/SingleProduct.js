import React, { useEffect } from 'react'
import { useParams,NavLink } from 'react-router-dom'
import { useProductContext } from "../src/context/ProductContext"
import { TbReplace, TbTruckDelivery } from 'react-icons/tb';
import { MdSecurity } from "react-icons/md";
import Image from './component/Image';
import FormatPrice from './Helpers/FormatPrice';
import Star from './component/Star';
import AddToCart from './component/AddToCart';
const API = 'https://api.pujakaitem.com/api/products';
const SingleProduct = ()=> {
  const {getSingleProduct,isSingleLoading,singleProduct} = useProductContext();
  const {id} = useParams();
  const {name,price,company,description,category,stock,reviews,stars,image} = singleProduct;

  useEffect(()=>{
    const resp = `${API}?id=${id}`
    getSingleProduct(resp)
    // eslint-disable-next-line
  },[id])
  if(isSingleLoading){
    return <div>.....Loading</div>
  }
  return (
    <>
    <div className="breadcrumbs">
        <div className="page-header d-flex align-items-center">
           <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2>Single Product</h2>
                </div>
              </div>
           </div>
        </div>
        <nav>
          <div className="container">
            <ol>
              <li><NavLink to ="/">Home</NavLink></li>
              <li><NavLink to ="/singleproduct">{name}</NavLink></li>
            </ol>
          </div>
        </nav>
    </div>
    <section id="single-product-page" className='single-product-page'>
      <div className='container'>
        <div className='grid grid-two-column'>
          <div className='product-images'>
            <Image imgs = {image}/>
          </div>
          <div className='product-data'>
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />
            <p className='product-data-price'>
              MRP:
              <del>
                <FormatPrice price={price + 250000}/>
              </del>
            </p>
            <p className='product-data-price product-data-real-price'>
              Deal of the Day : <FormatPrice price={price}/>
            </p>
            <p>{description}</p>
            <div className='product-data-warranty'>
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon"/>
                 <p>Free Delivery</p>
              </div>  
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Fast Delivered </p>
              </div>
              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>  
            </div>
            <div className="product-data-info">
              <p>Available:
               <span>{stock > 0 ? "In Stock":"Not Available "}</span>
              </p>
              <p>
                Category : <span> {category} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
           <hr/>
           {stock > 0  && <AddToCart product = {singleProduct} />}
          </div>
        </div>
      </div>
    </section>
    </>
    
  )
}

export default SingleProduct