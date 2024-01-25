import React from 'react'
import '../../assets/css/landing.css'
import myJ from '../../assets/images/portfolioJ.png'
import myB from '../../assets/images/portfolioB.png'
import TwoSphere from './SphereWords'
import FirstNav from '../nav/FirstNav'
const Landing = () => {
  return (
    <div>
      <img src={myJ} alt="" className="myJ" />
      <img src={myB} alt="" className="myB" />
      <TwoSphere />

      <div className="navModalContainer">
        <FirstNav/>
      </div>
    </div>
  )
}

export default Landing
