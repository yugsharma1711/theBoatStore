import React from 'react'
import { Message_data } from '../context/Context';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Orders = ({ orderData }) => {
    const { userToken } = useContext(Message_data);
    const [address, setAddress] = useState();
    const [product, setProduct] = useState();
    const getAddress = async () => {
      const query = `http://127.0.0.1:8000/user/getAddress/${orderData.delivery_address}`;
      const response = await axios.get(query, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      setAddress(response.data);
      console.log(response)
    };
    const getProduct = async () => {
        const query = `http://127.0.0.1:8000/products/getSingleProduct/${orderData.product}/`;
        const response = await axios.get(query, {
          headers: { Authorization: `Bearer ${userToken}` },
        });
        setProduct(response.data);
        console.log(response)
      };
    useEffect(() => {
      getAddress();
      getProduct()
    }, [orderData, userToken]);
  
    return (
      <div>
        <div className = 'order-container'>
          <div className='order-section'>
            <div className='product-container'>
            <h5 className='order-date'>Order Placed on: {orderData.order_date.slice(0,10)}</h5> 
              <div className='product'>
                <img src={product?.image} className= 'cart-product-image' alt="" />
                <div className='item-desc'>
                  <div className = 'flex top'>
                    <h5>{product?.name}</h5>
                  </div>
                  <div>&#8377;<span className='buying-price'>{product?.buying_price}</span></div>
                  <p className='product-price'>&#8377;{product?.selling_price}</p>
                  <p className='savings'>You Save: &#8377;{(product?.buying_price - product?.selling_price)}</p>
                  <p className='expected-delivery'>Expcted Delivery : {orderData.order_date.slice(0,10)}</p>
                </div>  
              </div>
            </div>
            <div className = 'address'>
              <h4>
                Delivery To:
              </h4>
              <p>{address?.address_line_1}</p>
              <p>{address?.address_line_2}</p>
              <p>{address?.city} </p>
              <p>{address?.pincode}</p>
              <p>{address?.country}</p>
            </div>
          </div>
          
          {/* Progress BAR */}
          <div id="bar-progress" class="mt-5 mt-lg-0">
          <div class="step step-active">
            <span class="number-container">
                                    <span class="number">1</span>
            </span>
            <h5>Order  Placed</h5>
          </div>
          <div class="seperator"></div>
          <div class="step">
            <span class="number-container">
                                    <span class="number">2</span>
            </span>
            <h5>Seller Confirmation</h5>
          </div>
          <div class="seperator"></div>
          <div class="step">
            <span class="number-container">
                                    <span class="number">3</span>
            </span>
            <h5>Shipment</h5>
          </div>
          <div class="seperator"></div>
          <div class="step">
            <span class="number-container">
                                    <span class="number">4</span>
            </span>
            <h5>Delivery</h5>
          </div>
      </div>
        </div>
    </div>
    );
    }
  export default Orders;
  