import React, { useContext } from 'react'
import { Products } from '../../products'
import { ShopContext } from '../../context/shop-context'
import CartItem from "./cartItem"
import "./cart.css"

const Cart = () => {

  const { cartItems } = useContext(ShopContext)
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>

      <div className='cartItems'>
        {Products.map((prod) => { 
          if (cartItems[prod.id] !== 0 ){
            return <CartItem id={prod.id} productName={prod.productName} price={prod.price} productImage={prod.productImage  } />
          }
         } )}
      </div>
    </div>
  )
}

export default Cart
