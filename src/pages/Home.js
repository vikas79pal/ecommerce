import React, { useEffect, useState } from 'react'
import {dataUrl} from '../dataUrl'
import Product from '../components/Product'
import "./Home.css"
const Home = () => {
  const [loading,setLoading]=useState(true)
  const [products,setProducts]=useState([])
  const fetchProductHandler=async()=>{
    setLoading(true)
    try{

      const response=await fetch("https://lemon-dentist-xfbxg.ineuron.app:8000/api/v1/getProductHome")
      const data=await response.json()
      console.log(data)
      setProducts(data.data)
    }
    catch(err){
      setProducts([])

    }
    setLoading(false)
      
  }
  useEffect(()=>{
    fetchProductHandler()

  },[])
  return (
    <div className='cards'>
      <div className='all-cards'>

      {
        products.map(product=><Product key={product._id} product={product}/>
        )
      }
      </div>

    </div>
  )
}

export default Home