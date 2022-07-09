import React from 'react'
import { MdPhone } from 'react-icons/md'
import { IoIosMail } from 'react-icons/io'
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa'
import '../styles/Footer.css'
import footer_logo from '../assets/logo_footer.png'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer'>
        <img src={footer_logo} alt='footer_logo' className='footer-logo' />
        <div className='contact'>
          <p>
            <span>
              <MdPhone />
            </span>{' '}
            <span>+769 586 4558</span>
          </p>
          <p>
            <span>
              <IoIosMail />
            </span>{' '}
            <span>service@openauto.ca</span>
          </p>
        </div>
        <p className='copyright'>Open Auto @ all rights reserved</p>
        <div className='links'>
          <a href='#'>Privacy policy</a>
          <a href='#'>Terms of use</a>
          <a href='#'>Cookie policy</a>
        </div>
        <div className='socials'>
          <a href='#'>
            <FaFacebookF size='1.2em' />
          </a>
          <a href='#'>
            <FaTwitter size='1.4em' />
          </a>
          <a href='#'>
            <FaYoutube size='1.4em' />
          </a>
          <a href='#'>
            <FaLinkedin size='1.4em' />
          </a>
          <a href='#'>
            <FaInstagram size='1.4em' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
