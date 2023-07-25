import React, { useEffect } from 'react'
import "./Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { NavLink, useNavigate } from 'react-router-dom'
const Cart = () => {
  
  const navigate=useNavigate()
  const shopNowHandler =()=>{
    navigate("/")
  }
  const cartitem=useSelector(state=>state.cart)
  let totalExpense=0
  for (let index = 0; index < cartitem.length; index++) {

      totalExpense+=parseFloat(cartitem[index].price);
      
    } 

  return (
    <div className='cart--container'>
{
  totalExpense===0 &&<div className='empty--cart'> <p > Your cart is empty!</p>  <button onClick={shopNowHandler} className='shopnow'>Shop Now</button></div>
}
{totalExpense!==0 &&
      <>

    <div className='cart--items'>
      {cartitem.map(item=><CartItem product={item}/>)}

    </div>
    <div className='total--of--items'>
      <div>

      <h4 className='urcart'>Your Cart</h4>
      <h2 className='summary'>SUMMARY</h2>
      <p className='tot'>Total Items: {cartitem.length}</p>
      </div>
      <div>
        
      <p className='tot'>Total Amount : <span className='totexp'>${totalExpense}</span></p>
      <button className='checkout'>Checkout Now</button>
      </div>

    </div>
    </>
}
    </div>
  )
}

export default Cart