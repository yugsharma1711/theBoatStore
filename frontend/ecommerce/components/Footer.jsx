import React from 'react'
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Boat Products All Rights Reserved</p>
      <p className='icons'>
        <AiOutlineInstagram />
        <AiOutlineFacebook/>
      </p>
    </div>
  )
}

export default Footer