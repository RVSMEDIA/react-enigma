import React from 'react'
import { NavLink } from 'react-router-dom'
import FormatPrice from '../Helpers/FormatPrice'

const ListView = ({ products }) => {
  return (
    <>
      <div className='container grid grid-card-data'>
        {
          products.map((curElem)=>{
            const {id,name,image,price,description} = curElem
            return <div className='row p-3 border'>
              <div className='col-lg-5'>
                 <div className='about-img'>
                   <img src={image} alt={name} className="img-fluid"/>
                 </div>
              </div>
              <div className='col-lg-7'>
                <h3>{name}</h3>
                <p><FormatPrice price={price}/></p>
                <p>{description.slice(0,250)}</p>
                <NavLink to ={`/singleproduct/${id}`}>
                  <button className='btn btn-danger'>READ MORE</button>
                </NavLink>
              </div>
            </div>
          })
        }
      </div>
    </>
  )
}

export default ListView