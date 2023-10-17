import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

const Product = ({id,productName,price,productImage}) => {

  const   { addToCart,cartItems }  = useContext(ShopContext)

  
  return (
    <div className='product'>
        <img className='prod_img' src={productImage} alt="" />
        <h2 className='prod_name'>{productName}</h2>
        <p className='prod_id'>{id}</p>
        <p className='prod_price'>{price}</p>

        <button className='prod_add' onClick={() => addToCart(id)} >Add to Cart{cartItems[id] > 0 && <> ({cartItems[id]}) </>}</button>

    </div>
  )
}

export default Product
