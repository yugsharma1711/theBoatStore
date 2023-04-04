import React, { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { useContext } from 'react'
import { Message_data } from '../context/Context'
import { AiOutlineDelete } from 'react-icons/ai'
const Cart = () => {
  const cart = useRef();
  const {totalPrice, totalQty, cartItems, setShowCart, onRemove} = useContext(Message_data);
  const {toggleCartItemQty} = useContext(Message_data);
  return (
    <div className='cart-wrapper'>
      <div className='cart-container'>
        <button type = 'button' className='cart-heading' onClick={()=>setShowCart(false)}>
          <AiOutlineLeft/>
          <span className='heading'>Cart</span>
          <span className='cart-num-items'>{totalQty}</span>
        </button>
        {cartItems.length < 1 ? (
          <div className='empty-cart'>
            <AiOutlineShopping size = {150}/>
            <h3>Your shopping bag is empty</h3>
            <Link href = '/'>
              <button type = 'button' className='btn' onClick={()=>{setShowCart(false)}}>Continue Shopping</button>
            </Link>
          </div>
        ): null}
        <div className='product-container'>
          {cartItems.length >=1 && cartItems.map((item)=>
            (
            <div className = 'product'>
              <img src= {item.image} className = 'cart-product-image' />
              <div className='item-desc'>
                <div className='flex top'>
                  <h5>{item.name}</h5>
                  <span>&#8377;<span className='buying-price'>{item.buying_price}</span> <span style={{color : 'red'}}>{item.discount}%</span></span>
                  <p className='product-price'>&#8377;{item.selling_price}</p>
                </div>
                <div className='flex bottom'>
                    <div>
                        <p className="quantity-desc">
                          <span className="minus" onClick={()=>toggleCartItemQty(item.id, 'dec')}><AiOutlineMinus/></span>
                          <span className="num">{item.quantity}</span>
                          <span className="plus" onClick={()=>toggleCartItemQty(item.id, 'inc')}><AiOutlinePlus/></span>
                        </p>
                    </div>
                    <button type = 'button' className='remove-item' onClick={()=>onRemove(item.id)}>
                      <AiOutlineDelete/>
                    </button>                    
                </div>
              </div>
            </div>
          ))}
          {cartItems.length >= 1 && (
            <div className='cart-bottom'>
              <div className='total'>
                <h3>Subtotal: </h3>
                <h3>&#8377;{totalPrice}</h3>
              </div>
              <div className='btn-container'>
                <Link href = '/placeorder'>
                  <button type = 'button' className='btn' onClick={()=>{setShowCart(false)}}>
                    Pay with Stripe
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>

  )
}

export default Cart