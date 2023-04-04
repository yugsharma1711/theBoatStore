import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { Product, HeroBanner, FooterBanner } from '../../components'
import { useEffect, useState } from 'react'
import axios from 'axios'
const inter = Inter({ subsets: ['latin'] })
export default function Home({products, bannerData, footer}) {
  return (
    <>
      <HeroBanner HeroBanner = {bannerData} />
      <div className='products-heading'>
        <h2>Best selling products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {products.map((product)=> <Product product = {product} key = {product.id}/>)}
      </div>
      <FooterBanner footerData = {footer}/>
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get('http://127.0.0.1:8000/products/getSingleProduct/2/');
  const bannerData = res.data;
  const prod_res = await axios.get('http://127.0.0.1:8000/products/getallproducts/');
  const products = prod_res.data.slice(0,3)
  const footer_data = await axios.get('http://127.0.0.1:8000/products/getSingleProduct/2/')
  const footer = footer_data.data
  return {
    props: { products, bannerData, footer}
  }
}
