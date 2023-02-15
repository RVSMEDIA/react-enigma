import React from 'react'
import FilterSection from './component/FilterSection'
import ProductList from './component/ProductList'
import Sort from './component/Sort'

const Products = () => {
  
  return (
    <>
    <div className='featured-product sections-bg'>
      <div className='container grid grid-filter-column'>
        <div>
          <FilterSection/>
        </div>
        <section className='product-view--sort'>
          <div className='sort-filter mt-5 mb-5'>
            <Sort/>
          </div>
          <div className='main-product'>
            <ProductList/>
          </div>
        </section>
      </div>
    </div>
    </>
  )
}

export default Products



