import React from 'react'
import './Hero.css'
import IcPin from '../Svgs/icPin/IcPin'
import navSlider from '../../assets/img/Nav.png'
import Image from 'next/image'

function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className='title'>
        <IcPin />
        <h1 className="hero__title"> AMERICA DEL SUR</h1>
        </div>
        <p className="hero__subtitle">Lugares Maravillosos por America del Sur</p>
        <Image src={navSlider} alt="navSlider" className='heroNav' />
        <p className="hero__subtitle2">Estos son algunos lugares que eligen la mayoria de los turistas que visitan America del Sur</p>
      </div>
    </div>
  )
}

export default Hero