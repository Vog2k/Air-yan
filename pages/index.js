import React from 'react';
import Navbar from '../components/Navbar';

import SearchBar from '../components/SearchBar';
import AlertHomepage from '../components/AlertHomepage';
import Package from '../components/Package';
import ExploreMore from '../components/ExploreMore';
import Footer from '../components/Footer';

const index = () => {
  return (
    <main className='index-page page-all'>
    <div className='home_page'>
      <Navbar />
    </div>
  
    <SearchBar />
    <AlertHomepage />
    <Package />
    <ExploreMore />
    <Footer />
    
    </main>
    
  );
};

export default index;