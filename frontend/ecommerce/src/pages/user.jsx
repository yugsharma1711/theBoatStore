import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { Message_data } from '../../context/Context';
import { useContext } from 'react';
import { useState } from 'react';
import Orders from '../../components/Orders';
import { useRouter } from 'next/router';
const user = () => {
  useEffect(()=>{
    if (userToken == null){
      router.push('/login');
    }
  },[])
  const router = useRouter()
  const {userToken} = useContext(Message_data);
  
  const[orderData, setOrderData] = useState([])
  const query = `http://127.0.0.1:8000/user/getOrder/`
  const getOrders = async ()=>{
    const data = await axios.get(query,  { headers: {"Authorization" : `Bearer ${userToken}`} })
    setOrderData(data.data)
  }
  useEffect(()=>{
    if (userToken != null){
      getOrders()
    }    
  }, [])
  return (
      <div>
      <div className='products-heading'>
        <h2>My Orders</h2>
      </div>
      <div>
        {orderData.map((order)=>(<Orders orderData = {order}/>))}
      </div>
      </div>
  )
}
export default user