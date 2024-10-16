import React from 'react'
import './Hero.css'
import arrow from '../images/arrow.png'
import Category from '../shop/Category'


const Hero = () => {
  return (
    <div>
      <div className="hero">
        <img src="" alt="" />
        <div>
          <h2>STEP UP YOUR</h2>
          <h1>BE YOUR OWN <span>HERO</span></h1>
          <p>Take care of your body. Its the only place you have to live. Start workout now.</p>
          <button className="styled-btn">
            Learn More
            <img src={arrow} className="icon" />
          </button>

        </div>
      </div>
<Category/>
    </div>

  )
}

export default Hero
