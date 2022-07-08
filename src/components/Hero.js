import React from 'react'
import '../styles/Hero.css'
import hero_img from '../assets/Pickup_Illustration.png'
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa'

const Hero = () => {
  return (
    <main className='hero'>
      <h3 className='hero-head'>
        vehicle maintenance from the comfort of your home
      </h3>
      <p className='hero-para'>
        Open Auto soothes the hassle of maintaining your vehicle and helps you
        deal with unexpected repairs worry-free.
      </p>
      <form className='form'>
        <input type='text' placeholder='Enter Your Name' />
        <input type='text' placeholder='Enter Your Mail' />
        <button type='submit' className='submit-btn'>
          Submit
        </button>
      </form>
      <img src={hero_img} alt='hero' className='hero-img' />
      <div className='social-links'>
        <a href='#'>
          <FaFacebookF size='1.5em' />
        </a>
        <a href='#'>
          <FaTwitter size='1.5em' />
        </a>
        <a href='#'>
          <FaYoutube size='1.5em' />
        </a>
        <a href='#'>
          <FaLinkedin size='1.5em' />
        </a>
        <a href='#'>
          <FaInstagram size='1.5em' />
        </a>
      </div>
    </main>
  )
}

export default Hero
