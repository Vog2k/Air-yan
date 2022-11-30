import React from 'react';
import Image from 'next/image';

import { BsArrowUp } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";



const Footer = () => {
  return (
    <>
         <div className='footer_container'>
         <div className='footer_subcontainer0'></div>
            <div className='footer_subcontainer1'>
                <div className='footer_link'>
                    <div className='footer-link-detail footer-passenger'>
                        Passengers
                        <ul>Flights</ul>
                        <ul>Airlines</ul>
                        <ul>Park</ul>
                        <ul>Security Wait Times</ul>
                        <ul>Map</ul>
                        <ul>Shop & Dine</ul>
                        <ul></ul>
                    </div>
                    <div className='footer-link-detail footer-businesscommunity'>
                        Business and Community
                        <ul>About Us</ul>
                        <ul>Career</ul>
                    
                    </div>
                    <div className='footer-link-detail footer-general'>
                        General
                        <ul>Report Property</ul>
                        <ul>Sign Up</ul>
                        <ul>Contact Us</ul>
                        <ul>Newsroom</ul>
                    </div>
                    

                </div>
                <div className='footer_icon'>
                    <div className='social-media'>
                        <div className='social_media-header'> Follow us</div>
                        <div className='social_media-link'>
                            <ul><BsFacebook /></ul>
                            <ul><BsTwitter /></ul>
                            <ul><BsPinterest /></ul>
                            <ul><BsYoutube/></ul>
                            <ul><BsLinkedin /></ul>
                        </div>
                       
                      
                    </div>
                    <div className='app-store'>
                        <div className='app-store-header'> Download the app</div>
                        <div className='app-store-icon'>
                            <ul><Image src="/Appstore_apple.png"  alt="Apple Store Image" height="30" width="100"/></ul> 
                            <ul><Image src="/Appstore_andriod.png"  alt="Android Store Image" height="30" width="100"/></ul> 
                           
                        </div>
                    </div>
                </div>
            </div>

            
            <div className='footer_subcontainer2'>
                <div className='footer-link-detail footer-go2top'> Go to top  <BsArrowUp/></div>   
            </div>

            

         </div>
    </>
   
  );
};

export default Footer;