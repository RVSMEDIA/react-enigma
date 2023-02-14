import React from 'react'
import FilterSection from './component/FilterSection'
import ProductList from './component/ProductList'
import Sort from './component/Sort'
import { useFilterContext } from './context/FilterContext'

const Products = () => {
  const {filter_products} = useFilterContext();
  console.log(filter_products);
  return (
    <>
    <div className='container grid grid-filter-column'>
      <div>
        <FilterSection/>
      </div>
      <section className='product-view--sort'>
        <div className='sort-filter'>
          <Sort/>
        </div>
        <div className='main-product'>
          <ProductList/>
        </div>
      </section>
    </div>
    </>
  )
}

export default Products



