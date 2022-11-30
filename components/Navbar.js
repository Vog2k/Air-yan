import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
   <>
     <nav>
      <div className='navigation-bar'>
          <Link href="/" className='header-menu logo'>
            <Image src="/TravelNZLogo.png" alt='Logo' width="150" height="60">

            </Image>
          </Link>
      </div>
      <div className='navigation-menu-bar'>
        <Link href="/" className='header-menu menu-bar home-page'> Home</Link>
            <Link href="/aboutus" className='header-menu  menu-bar aboutus-page'> About Us</Link>
            <Link href="/contact" className='header-menu  menu-bar contactus-page'> Contact Us</Link>
            <Link href="/login" className='header-menu menu-bar login-page'>Log in </Link>
    
      </div>
   </nav>
   </>
  )
};

export default Navbar;