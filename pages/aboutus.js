import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutUs from '../components/textAboutUs';



const aboutus = () => {
  return (
    <main className='aboutus-page page-all'>
    
    <div className='home_page'>
    <Navbar />
    </div>

    <AboutUs/>

    <Footer/>
    </main>
    
    
  )
};

export default aboutus;