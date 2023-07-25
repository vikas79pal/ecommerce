import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState=[]

const fetchCartItem=async()=>{
    const res= await fetch("https://lemon-dentist-xfbxg.ineuron.app:8000/api/v1/cart")
    const item=await res.json()
    console.log(item,"hs")
    return item.data
}

export const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        AddItem:(state,action)=>{
            // const requestOptions = {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ title: 'React POST Request Example' })
            // };
            // const response = await fetch('https://reqres.in/api/posts', requestOptions);
            // const data = await response.json();
            state.push(action.payload)

        },
        RemoveItem:(state,action)=>{
            return state.filter(item=>item._id!==action.payload)
        }
    }
})
export const {AddItem,RemoveItem} =CartSlice.actions
export default CartSlice.reducer