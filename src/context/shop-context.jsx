import React, { createContext, useState } from 'react'
import {Products} from "../products.js"

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
    
    const GetDefaultCart = () => {
        let cart = {}
        for(let i = 0; i < Products.length; i++){
            cart[i+1] = 0
        } 
        return cart
    }
    const [cartItems,setCartItems] = useState(GetDefaultCart())

    const addToCart= (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]: prev[itemId] + 1 }) )
    }
    const removeFromCart= (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]: prev[itemId] - 1 }) )
    }
    const contextValue = {cartItems, addToCart, removeFromCart}

    console.log(cartItems)
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
