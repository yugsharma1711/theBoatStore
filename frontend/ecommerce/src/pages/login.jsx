import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
import { Message_data } from '../../context/Context';
import { useContext } from 'react';
import Link from 'next/link';
const Login = () => {
    const {userToken, setUserToken} = useContext(Message_data);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const router = useRouter();
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const query = 'http://127.0.0.1:8000/login/';
        const _data = {
            "email" : email,
            "password": password
        }
        try {
            const response = await axios.post(query, _data, {
              headers: {
                'Content-Type': 'application/json'
              },
            });
            const tokenData = response.data;
            console.log(tokenData)
            localStorage.setItem("access", tokenData.access)
            setUserToken(tokenData.access)
            router.push('/');
          } catch (error) {
            alert(error.message);
          }
    }
  return (
    <div>
        <div className='products-heading'>
            <h2>Login</h2>
        </div>
        <div className="login-page">
            <div className="form">
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="email address" onChange={(event) => setEmail(event.target.value) }/>
                    <input type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)}/>
                    <button type = "submit">login</button>
                <p className="message">Not registered? <Link href="/signup">Create an account</Link></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login