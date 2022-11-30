import React from 'react';
import Image from 'next/image';
const ExploreMore = () => {
  return (
    <>
    <div className='explore-main'>ExploreMore
        <div className='explore-header'></div>
        <div className='explore-container'>
            <div className='explore'>
                <div className='explore-title '>
                <Image  src="/nz_map.png" alt='Map 
                Image' layout="fill" objectFit="cover"></Image>
                 
                </div>
                <div className='explore-detail  '>
                    <div className='explore-header '>Latest travel restrictions</div>
                    <div className='explore-info '> provide information on the entry requirements for all countries so you can plan your flight smoothly</div>
                </div>
            </div>
            <div className='explore'>
                <div className='explore-title '>
                <Image  src="/Install_app.png" alt='Map 
                Image' layout="fill" objectFit="cover"></Image>
                 
                </div>
                <div className='explore-detail  '>
                    <div className='explore-header '>Install our mobile app</div>
                    <div className='explore-info '> Our mobile app provides real-time information when you are at the airport</div>
                </div>
            </div>
            <div className='explore'>
                <div className='explore-title '>
                <Image  src="/explore_location.png" alt='Map 
                Image' layout="fill" objectFit="cover"></Image>
                 
                </div>
                <div className='explore-detail  '>
                    <div className='explore-header '>The most beautiful destinations</div>
                    <div className='explore-info '> Have you ever considered visiting Easter Island or Alaska? These are the most unique destinations in 2022</div>
                </div>
            </div>
        
        </div>
    </div>
    </>
    
  );
};

export default ExploreMore;