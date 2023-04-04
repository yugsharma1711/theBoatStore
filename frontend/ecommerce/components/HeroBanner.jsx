import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { useEffect } from 'react';
const HeroBanner = ({HeroBanner}) => {
  return (
    
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>SUMMER SALE</p>
            <h3>{HeroBanner.name}</h3>
            <h1>FINE</h1>
            <img src= {HeroBanner.image} alt="" className='hero-banner-image' />
            <div>
            <Link href={`/product/${HeroBanner.id}`}>
                <button type = 'button'>BUY NOW @{HeroBanner.selling_price}</button>
            </Link>
            <div className='desc'>
                <h5>T&C</h5>
                <p>Valid till Stocks Last</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner