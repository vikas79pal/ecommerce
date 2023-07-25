import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddItem, RemoveItem } from '../redux/slices/CartSlice'
import { toast } from 'react-hot-toast'
import {AiFillDelete} from "react-icons/ai"
import "./CartItem.css"

const CartItem = ({product}) => {

  const cart =useSelector((state)=>state)
  const dispatch=useDispatch()
 
  function delProductHandler(){
    dispatch(RemoveItem(product._id))
  
    toast.error("Item Removed From Cart")

  }
  return (
    <div className='product'>
      <div className='prod--image' ><img width={150}  src={product.image} alt="product image"/></div>
      <div className='prod-detail'>
        <h3 className='title'>{product.title}</h3>
        <p className='desc1'>{product.description.split(" ").slice(0,35).join(" ")+"..."}</p>
        <div className='price--del'><span className='price1'>${product.price}</span> <div className='delete--cont' onClick={delProductHandler}><AiFillDelete className='delete'/></div></div>
      </div>
    </div>
  )
}

export default CartItem