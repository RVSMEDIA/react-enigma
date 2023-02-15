import React from 'react'
import {BsFillGridFill, BsList} from "react-icons/bs";
import { useFilterContext } from '../context/FilterContext';

const Sort = () => {
  const { filter_products,grid_view,setGridView, setListView, sorting } = useFilterContext()
  return (
    <>
    <div className='d-flex justify-content-between'>
       <div className='sorting-list--grid'>
        <button className={grid_view ? 'active sort-btn' : 'sort-btn'} onClick={setGridView}>
          <BsFillGridFill className="icon"/>
        </button>
        <button className={!grid_view ? 'active sort-btn' : 'sort-btn'} onClick={setListView}>
          <BsList className="icon"/>
        </button>
       </div>
       <div className='product-data'>
        <p>{`${filter_products.length} Product Avaiable`}</p>
       </div>
       <div className='sort-selection'>
         <form action ="#">
          <label htmlFor='sort'></label>
          <select name ="sort" id="sort" className='sort-selection--style' onClick={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="highest">Price(highest)</option>
            <option value="a-z">Price(a-z)</option>
            <option value="z-a">Price(z-a)</option>
          </select>
         </form>
       </div>

    </div>
    </>
  )
}

export default Sort