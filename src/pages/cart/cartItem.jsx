import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

const CartItem = ({id,productName,price,productImage}) => {

    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext)
  return (
    <div className='cart_item'>
        <img className='prod_img' src={productImage} alt="" />
        <h2 className='prod_name'>{productName}</h2>
        <p className='prod_id'>{id}</p>
        <p className='prod_price'>{price}</p>

        <button className='prod_add' onClick={() => addToCart(id)} >Add </button>
        <input type="text" value={cartItems[id] } />
        <button className='prod_add' onClick={() => removeFromCart(id)} >Remove </button>

    </div>
  )
}

export default CartItem
