import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { CartAmountToggle } from './CartAmountToggle';

const AddToCart = ({product})=> {
    const {colors,stock} = product;    
    const [color,setColor] = useState(colors[0]);
    const [amount,setAmount] = useState(1);
    const setDecrease = () =>{
     amount > 1 ? setAmount(amount - 1):setAmount(1); 
    }
    const setIncrease  = () =>{
     amount < stock ? setAmount(amount + 1):setAmount(stock);
    }
  return (
    <>
        <div className='colors'>
            <p>
                Colors:{
                    colors.map((curColors,index)=>{
                        return <button key={index} style={{backgroundColor:curColors}} className={color === curColors ? "btnStyle active":"btnStyle"}
                        onClick={() => setColor(curColors)}
                        >{color === curColors ? <FaCheck className="checkStyle" /> : null}</button>
                    })
                }
            </p>
        </div>
        <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease}/>
        <NavLink to ="/cart">
            <button className='btn btn-danger'>Add To Cart </button>
        </NavLink>
    </>
  )
}

export default AddToCart