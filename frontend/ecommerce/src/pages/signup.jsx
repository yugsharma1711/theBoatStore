import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
import { Message_data } from '../../context/Context';
import { useContext } from 'react';
import Link from 'next/link';
import { headers } from '../../next.config';
const signup = () => {
    const {userToken, setUserToken} = useContext(Message_data);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [mobile_number, setMobileNumber] = useState();
    const [address_line_1, setAddress_line_1] = useState();
    const [address_line_2, setAddress_line_2] = useState();
    const [city ,setCity] = useState();
    const [pincode, setPincode] = useState();
    const [country, setCountry] = useState();
    const [state, setState] = useState();
    const [addressResponse, setAddressResponse] = useState()
    const router = useRouter();
    const registerUser = async (addressId)=>{
      const query = 'http://127.0.0.1:8000/user/register/';
        const _data = {
          "email" : email,
          "name": name,
          "mobile_number": mobile_number,
          "address": addressId,
          "password": password
        }
        console.log(_data)
        try {
            const response = await axios.post(query, _data, {
              headers: {
                'Content-Type': 'application/json'
              },
            });
          } catch (error) {
            alert(error.message);
          }
    }
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const address_data = {
          "address_line_1" : address_line_1,
          "address_line_2" : address_line_2,
          "city" : city,
          "state" : state,
          "pincode" : pincode,
          "country": country
        }
        const query_address = 'http://127.0.0.1:8000/user/setAddress/';
        try{
          const response = await axios.post(query_address, address_data, {
            headers:{
              'Content-Type' : 'application/json'
            },
          })
          await registerUser(response.data.id);
        }catch (error){
          alert(error.message)
        }
    }
  return (
    <div>
        <div className='products-heading'>
            <h2>SIGNUP</h2>
        </div>
        <div className="login-page">
            <div className="form">
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="name" onChange={(event) => setName(event.target.value) }/>
                    <input type="text" placeholder="email address" onChange={(event) => setEmail(event.target.value) }/>
                    <input type="text" placeholder="Mobile Number" onChange={(event) => setMobileNumber(event.target.value) }/>
                    <input type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)}/>
                    <input type="text" placeholder="Address Line 1" onChange={(event) => setAddress_line_1(event.target.value) }/>
                    <input type="text" placeholder="Address Line 2" onChange={(event) => setAddress_line_2(event.target.value) }/>
                    <input type="text" placeholder="Pincode" onChange={(event) => setPincode(event.target.value) }/>
                    <input type="text" placeholder="City" onChange={(event) => setCity(event.target.value) }/>
                    <input type="text" placeholder="State" onChange={(event) => setState(event.target.value) }/>
                    <input type="text" placeholder="Country" onChange={(event) => setCountry(event.target.value) }/>
                    <button type = "submit">SignUp</button>
                <p className="message">Already have a account ?<Link href="/login">Login</Link></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default signup;