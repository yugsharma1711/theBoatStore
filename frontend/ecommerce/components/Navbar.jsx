import React, { useState } from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'
import Image from 'next/image'
import { Message_data } from '../context/Context'
import { useContext } from 'react'
import Cart from './Cart'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css'
import { useRouter } from 'next/router'
function clearLocalStorage() {
  localStorage.clear(); // clear the entire local storage
}

function logout(){
  const router = useRouter()
  clearLocalStorage();
  router.reload()
}
const Navbar = () => {
  const {user} = useContext(Message_data);
  const {showCart, setShowCart,totalQty} = useContext(Message_data);
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href= '/'>
          <Image src = "/assets/logo.png" width={25} height = {25}/>
          <span>TheBoatStore</span>
        </Link>
      </p>
      <div className='navbar-midcontainer '>
        <Link href = '/headphones' className='hover-underline-animation'> <p>Headphones</p></Link>
        <Link href = '/smartwatches' className='hover-underline-animation'><p>Smartwatches</p></Link> 
        <Link href = '/speakers' className='hover-underline-animation'><p>Speakers</p></Link>  
      </div>
      
      <div className='navbar-subcontainer'>
        <span className='profile'>
          {user && user  ? 
            <Menu className= "menu" menuButton={<MenuButton className="menu-button">{user.name}</MenuButton>}>
              <MenuItem className="menuitem">{user.name}</MenuItem>
              <MenuItem className="menuitem"><Link href= '/user'>My Orders</Link></MenuItem>
              <MenuItem className="menuitem" onClick={()=>{logout()}}>Logout</MenuItem>
          </Menu>  : 
          <Link href = '/login'>Login / Signup</Link>
          }
        </span>
        <button type = 'button' className='cart-icon' onClick={()=>{
          if(showCart){
            setShowCart(false);
          }
          else{
            setShowCart(true);
          }
        }}>
          <AiOutlineShopping />
          <span className='cart-item-qty'>{totalQty}</span>
        </button>
      </div>
      {showCart ?(<Cart/>) : null}
    </div> 
  )
}

export default Navbar