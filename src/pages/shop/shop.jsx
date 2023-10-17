import React from 'react'
import { Products } from '../../products'
import Product from "./product.jsx"
import "./product.css"

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shoptitle'>
        <h1>Joe Shop</h1>
      </div>
      <div className="products">
        {Products.map((prod)=> <Product id={prod.id} productName={prod.productName} price={prod.price} productImage={prod.productImage  } />)}
      </div>
    </div>
  )
}

export default Shop
