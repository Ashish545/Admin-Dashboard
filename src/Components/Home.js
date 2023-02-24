import React from 'react'
import Data from './Data';
import Profile from './Profile';

import Sidenavbar from './Sidenavbar';
 function Home() {
  return (
    <div className='home' >
        <Sidenavbar/>
        <Profile/>
        <Data/>


    

       
      
    </div>
  )
}


export default Home;