import React from 'react'
import "./Product.css"
import { useDispatch, useSelector } from 'react-redux'
import { AddItem, RemoveItem } from '../redux/slices/CartSlice'
import { toast } from 'react-hot-toast'
const Product = ({product}) => {
  const cart =useSelector((state)=>state)
  console.log(cart.cart)
  const dispatch=useDispatch()
  let isPresent=false
  function addProductHandler(){
    dispatch(AddItem(product))
    toast.success("Item Added To Cart")
  }
  function delProductHandler(){
    dispatch(RemoveItem(product._id))
  
    toast.error("Item Removed From Cart")

  }
  for (let index = 0; index < cart.cart.length; index++) {
    if(cart.cart[index]._id===product._id){
      isPresent=true;
      break
    } 
    
  }
  return (
    <div className='card'>
      <h2 className='title'>{product.title}</h2>
      <p className='desc'>{product.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      <div className='pro-img'>

      <img className='img' width={110} src={product.image} alt="product image"/>
      </div>
      <div className='price-btn'>
        <p className='price'>${product.price}</p>
        {
          isPresent? <button onClick={delProductHandler} className='add--btn'>Remove</button>:
          <button onClick={addProductHandler} className='add--btn'>Add To Cart</button>
        }
        
      </div>
    </div>
  )
}

export default Product