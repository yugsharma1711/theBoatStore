import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Message_data } from '../../context/Context'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'
import Popup from 'reactjs-popup';
import getStripe from '../../lib/getStripe'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router';
const placeorder = () => {
    const {address, getAddress} = useContext(Message_data);
    const {totalPrice,cartItems} = useContext(Message_data);
    const {user, userToken} = useContext(Message_data);
    const [popup, setPopup] = useState(false);
    const router = useRouter();
    const placeOrder = async ()=>{
        const query = 'http://127.0.0.1:8000/user/placeorder/';
        cartItems.map(async (item)=>{
            const _data = {
                "product" : item.id,
                "status": "Ordered",
                "delivery_address": user.address
            }
            console.log(_data)
            try {
                const response = await axios.post(query, _data, {
                  headers: {
                    Authorization : `Bearer ${userToken}`                    
                  },
                });
                router.push('/sucess');
              } catch (error) {
                alert(error.message);
              }
        })
    }
    const handleCheckout = async () =>{
        const stripe = await getStripe();
        const response = await fetch('/api/stripe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            user,
            userToken,
            cartItems
            })
        })
        if (response.statuscode === 500){
          return;
        }
        const data =  await response.json()
        await stripe.redirectToCheckout({ sessionId: data.id });

    }
    useEffect(()=>{
        getAddress();
    }, [])
    return (
        <div>
        <div className='products-heading '>
                <h2>Place Your Order</h2>
                <h4>Kindly Verify cart items and address</h4>
        </div>
        <div className='order-container'>
            <div className='order-section'>
                <div className='product-container '>
                        {cartItems.map((item) => (
                            <div className = 'product order-divider'>
                                    <img src= {item.image} className = 'cart-product-image' />
                                    <div className='item-desc'>
                                        <div className='flex top'>
                                            <h5>{item.name}</h5>
                                            <span>&#8377;<span className='buying-price'>{item.buying_price}</span> <span style = {{color:"red"}}>{item.discount}%</span></span>
                                            <p className='product-price'>&#8377;{item.selling_price}</p>
                                        </div>
                                        <p className='product-price'>Quantity: {item.quantity}</p>
                                        <p className='subtotalPrice'>Subtotal: &#8377;{item.selling_price * item.quantity}</p>
                                        <p className='savings'>You Save: &#8377;{(item.buying_price - item.selling_price)* item.quantity}</p>
                                    </div>
                            </div>
                        ))} 
                </div>
                <div className='address'>
                {address ?(
                    <>
                        <h4>Delivery Address</h4>
                        <p>{address.address_line_1}</p>
                        <p>{address.address_line_2}</p>
                        <p>{address.city}</p>
                        <p>{address.state}</p>
                        <p>{address.pincode}</p>
                        <p>{address.country}</p>
                        <div className='edit'>
                            <Popup trigger={<button onClick={()=>{setPopup(true)}}>
                                    <AiFillEdit />
                                    Edit
                                </button>} position="center">
                                <div className='popup-content'><h1>PopPUp</h1></div>
                            </Popup> 
                        </div>
                    </>
                    )
                : 
                <div  className='add-address'>

                    <p>Add a new Address</p>
                    <button className='address-button'><AiOutlinePlus/></button>

                </ div>
                }
                
                </div>
            </div> 
            
        </div>
            <div className="checkout-bottom">
                        <div className='total'>
                            <h3>Total Amount: </h3>
                            <h3>&#8377;{totalPrice}</h3>
                        </div>
            </div>
            <div className='btn-container'>
                <Link href = '/placeorder'>
                <button type = 'button' className='btn' onClick={()=>{placeOrder()}}>
                    Pay with Stripe
                </button>
                </Link>
            </div>
        </div>
    )   
}

export default placeorder