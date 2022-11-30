import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/contactForm';

const home = () => {
  return (
    <main className='contact-page page-all'>
      <div className='home_page'>
              <Navbar />        

      </div>
        <ContactForm/>

    <Footer/>
    </main>
   
  )
};

export default home;