import React from 'react';

const SearchBar = () => {
  return (
    <>
    
     <div className='serachbar-container'>
     Book Now !  
      <div className='searchbar-subContainer'>
      <div>
        <div className='searchbar searchbar-header'>
          <div>Buy Tickets</div>
          <div> Check Your Flight status</div>
          <div> </div>
        </div>
        <div className='searchbar searchbar-trip option'>
          <div class="trip-option one-way"><input type="radio"/> One Way </div>
          <div class="trip-option round-trip"><input type="radio"/> Round Trip </div>
          <div class="trip-option multi-city"><input type="radio"/> Multi-city</div>
      
        </div>
        <div className='searchbar-infobar'>
          <div className='subsearchbar searchbar-subinfo1'>
            <ul>From <input type="text" value="Select Depature..."/> </ul>
            <ul> To <input type="text" value="Selct Destination ..."/> </ul>
            <ul> Departure date<input type="text" value="DD/MM/YYY"/> </ul>  
            
            <ul>Passengers<input type="text" Value="2 Adult"/> </ul>  
            <ul><button className='btn-booknow' type="button"> Book Now !</button> </ul>
          </div>
          
        </div>
      </div>
      </div>
     </div>
   </>
  );
};

export default SearchBar;