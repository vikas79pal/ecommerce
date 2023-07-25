import React from 'react'
import "./Navbar.css"
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const totalelement=useSelector((state)=>state.cart.length)
  return (
    <div className='navbar'>
      <NavLink to="/">

        <div className='logo'><img width={77} src="https://www.shutterstock.com/image-vector/clothes-accessories-logo-linear-hanger-600w-1668282118.jpg"/></div>
      </NavLink>
        <div className='cart-icon'>
          <NavLink to="/" className='home'>

          Home
          </NavLink>
          <NavLink to="/cart">

            <div className='trolly'>

            <FaShoppingCart className='carticons'/>
            <span className='numbers'>{totalelement}</span>

            </div>
          </NavLink>
        </div>
    </div>
  )
}

export default Navbar