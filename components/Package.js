import React from 'react';
import Image from 'next/image';

const Package = () => {
  return (
    <>
        <div className='package-header'>
            <div className='package route-title'>
            Traveling from your location, <br></br>Wellington Airport
            </div> 
            <div className='package route-detail'>
                round trip - one passenge
            </div>
        </div>

        <div className='package-container'>
            <div className='card-container'>
                <div className='card-img-container'>
                    <Image className="card-img" src="/dest_auckland.png" alt='Destination Image' layout="fill" objectFit="contain">
                    </Image>
                </div>
                <div className='card-detail'>
                    <div className='card-title'> Auckland</div>
                    <div className='card-info'>
                        <div className='card-info card-date'> November 29th 2022</div>
                        <div className='card-info card-flightdetail'> DirectFlight - 1.5 hr</div>
                    </div>
                    <div className='card-price'>$ 12345.00NZD </div>
                </div>
            </div>
            <div className='card-container'>
                <div className='card-img-container'>
                <Image className="card-img" src="/dest_queenstown.png" alt='Destination Image' layout="fill" objectFit="contain">

                </Image>

                </div>
                <div className='card-detail'>
                    <div className='card-title'> Auckland</div>
                    <div className='card-info'>
                        <div className='card-info card-date'> November 29th 2022</div>
                        <div className='card-info card-flightdetail'> DirectFlight - 1.5 hr</div>
                    </div>
                    <div className='card-price'>$ 12345.00NZD </div>
                </div>
            </div>
            <div className='card-container'>
                <div className='card-img-container'>
                <Image className="card-img" src="/dest_christchurch.png" alt='Destination Image' layout="fill" objectFit="contain"></Image>
                

                </div>
                <div className='card-detail'>
                    <div className='card-title'> Auckland</div>
                    <div className='card-info'>
                        <div className='card-info card-date'> November 29th 2022</div>
                        <div className='card-info card-flightdetail'> DirectFlight - 1.5 hr</div>
                    </div>
                    <div className='card-price'>$ 12345.00NZD </div>
                </div>
            </div>
            <div className='card-container'>
                <div className='card-img-container'>
                    <Image className="card-img" src="/dest_dunedin.png" alt='Destination Image' layout="fill" objectFit="contain">
                    </Image>
                </div>
                <div className='card-detail'>
                    <div className='card-title'> Auckland</div>
                    <div className='card-info'>
                        <div className='card-info card-date'> November 29th 2022</div>
                        <div className='card-info card-flightdetail'> DirectFlight - 1.5 hr</div>
                    </div>
                    <div className='card-price'>$ 12345.00NZD </div>
                </div>
            </div>
        </div>
    </>
    
  );
};

export default Package;