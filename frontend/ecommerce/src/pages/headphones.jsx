import React from 'react'
import axios from 'axios'
import { Product } from '../../components'
const headphones = ({products}) => {
  return (
    <div className='product-page-outer-container'>
      <div className='products-heading '>
                <h2>Headphones</h2>
        </div>
      <div className='product-page-container'>
      
        {products.map((product)=> <Product product = {product} key = {product.id}/>)}
      </div>
    </div>
    
  )
}

export const getServerSideProps = async () => {
    const prod_res = await axios.get('http://127.0.0.1:8000/products/fetchByCategory/?my_param=1');
    const products = prod_res.data
    return {
      props: {products}
    }
  }
export default headphones