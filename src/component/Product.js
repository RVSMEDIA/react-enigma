import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
const Product = (curElem) => {
    const {id,name,image,price,category} = curElem;
  return (
    <div className="col-lg-4 mb-3">
        <div className="featured-product-card">
           <NavLink to ={`/singleproduct/${id}`}>
            <h4>{category}</h4>
            <img src={image} alt={name} className="img-fluid"/>
            <div className="featured-info">
                <h3>{name}</h3>
                <p>{<FormatPrice price={price}/>}</p>
            </div>
           </NavLink>
        </div>
    </div>
  )
}

export default Product