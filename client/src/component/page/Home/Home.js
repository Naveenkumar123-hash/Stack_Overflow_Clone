import React from 'react'
import '../../../App.css'
import Homemainbar from "../../Homemainbar/Homemainbar"
import LeftSidebar from '../../LeftSidebar/LeftSidebar.js'
import RightSidebar from '../../RightSidebar/RightSidebar.js'

const Home = ()=> {
  return (
    <div className='home-container-1'>
    <LeftSidebar/>
      <div className='home-container-2'>
        <Homemainbar/>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default Home