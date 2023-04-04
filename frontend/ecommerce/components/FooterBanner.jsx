import React from 'react'
import Link from 'next/link'
const FooterBanner = ({footerData}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <h3>FINE</h3>
          <h3>SMILE</h3>
        </div>
        <div className='right'>
          <p>Hurry UP !</p>
          <h3>Summer Sale</h3>
          <p>Best Headphones in the market !</p>
          <Link href = '/headphones'><button>Shop Now</button></Link>
          
        </div>
        <img src={footerData.image} alt="" className='footer-banner-image' />
      </div>
      
    </div>
  )
}

export default FooterBanner