import React, { useEffect } from 'react'
import { createContext, useState, useRef} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const initCart = {
  cartItems : [],
}
export const Message_data = createContext(null);
function Context({ children }) {
    const rendered = useRef(false);
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQty, setTotalQty] = useState(0);
    const [qty, setQty] = useState(1);
    const [user, setUser] = useState(null);
    const [userToken, setUserToken] = useState();
    const [address, setAddress] = useState();
    const getAddress = async ()=>{
      if (userToken != null){
        const query = `http://127.0.0.1:8000/user/getAddress/${user.address}`
        const data = await axios.get(query, {
          headers:{
            Authorization : `Bearer ${userToken}`
          }
        })
        setAddress(data.data)
        console.log(address)
      } 
    }
    let foundProduct;
    const getUser = async ()=>{
      if (userToken != null){
        const query= 'http://127.0.0.1:8000/user/getUser/'
        const data = await axios.get(query, {
          headers:{
            Authorization: `Bearer ${userToken}` 
          }
        })
        setUser(data.data[0])
        console.log(data.data)
      }
    }
    const saveItems = ()=>{
      console.log(cartItems)
      localStorage.setItem('cart-items', JSON.stringify(cartItems));
      localStorage.setItem('totalItems', totalQty);
      localStorage.setItem('totalPrice', totalPrice);
    }
    const getItems = ()=>{
      const user_token  = localStorage.getItem('access');
      const savedItems = localStorage.getItem('cart-items');
      const totalItems = localStorage.getItem('totalItems');
      const total_price = localStorage.getItem('totalPrice');
      if (user_token){
        setUserToken(user_token);
      }
      if (savedItems) {
        setCartItems(JSON.parse(savedItems));
      }
      if (totalItems){
        setTotalQty(parseInt(totalItems))
      }
      if (total_price){
        setTotalPrice(parseInt(total_price))
      }
    }
    useEffect(()=>{
      if (!rendered.current) {
        rendered.current = true;
        getItems();
      }
    }, []);      
    useEffect(()=>{
      saveItems();
    }, [cartItems])
    useEffect(()=>{
        getUser();
    }, [userToken])
    const onAdd = (product, quantity) => {
      const checkProductInCart = cartItems.find((item) => item.id == product.id);
      setTotalPrice((prevTotalPrice) => Math.round(prevTotalPrice + product.selling_price * quantity));
      setTotalQty((prevTotalQuantities) => prevTotalQuantities + quantity);
      console.log(checkProductInCart)
      if (checkProductInCart) {
        const updatedCartItems = cartItems.map((cartProduct) => {
          if (cartProduct.id == product.id)
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity,
            };
          return cartProduct;
        });
        setCartItems(updatedCartItems);
      } else {
        product.quantity = quantity;
        setCartItems([...cartItems, { ...product }]);
        console.log(cartItems);
      }
      
    } 
    const incQty = ()=>{
      setQty((prevQty)=>
        prevQty += 1
      )
    }
    const decQty = ()=>{
      setQty((prevQty)=>{
        if (prevQty - 1 < 1){
          return 1;
        }
        else{
          prevQty = prevQty - 1
        }
        return prevQty;
      })
    }
    const toggleCartItemQty = (id, value)=>{
      foundProduct = cartItems.find((item) => item.id === id)
      console.log(foundProduct)
      const newCartItems = cartItems.filter((item) => item.id !== id)
    if(value === 'inc') {
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
      setTotalPrice((prevTotalPrice) => Math.round(prevTotalPrice + parseFloat(foundProduct.selling_price)))
      setTotalQty(prevTotalQuantities => prevTotalQuantities + 1)
    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
        setTotalPrice((prevTotalPrice) => Math.round(prevTotalPrice - parseFloat(foundProduct.selling_price)))
        setTotalQty(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }
  const onRemove = (id) =>{
    foundProduct = cartItems.find((item) => item.id === id)
    console.log(foundProduct)
    const newCartItems = cartItems.filter((item) => item.id !== id)
    setTotalPrice((prevTotalPrice)=>prevTotalPrice - foundProduct.selling_price * foundProduct.quantity)
    setTotalQty((prevTotalQuantities)=>prevTotalQuantities - foundProduct.quantity)
    setCartItems(newCartItems)
  }
  return (
    <Message_data.Provider value={{showCart,setShowCart, cartItems, totalPrice, totalQty, qty, incQty, decQty, user, userToken, setUserToken, onAdd, toggleCartItemQty, onRemove, address, getAddress, setCartItems, setTotalPrice, setTotalQty}}>
      {children}
    </Message_data.Provider>
  );
}

export default Context;
