import React from 'react'
import Link from 'next/link'
import axios from 'axios'
const Product = ({product}) => {
  return (
    <div>
      <Link href = {`/product/${product.id}`}>
        <div className='product-card'>
          <img src={product.image} alt="" width = {250} height = {250} className = 'product-image' />
          <p className='product-name'>{product.name}</p>
          <span>&#8377;<span className='buying-price'>{product.buying_price}</span> <span style={{color : 'red'}}>{product.discount}%</span></span>
          <p className='product-price'>&#8377;{product.selling_price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product