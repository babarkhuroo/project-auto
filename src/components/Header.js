import React from 'react'
import '../styles/Header.css'
import Logo from '../assets/logo.png'
import { MdPhone } from 'react-icons/md'
import { IoIosMail } from 'react-icons/io'

const Header = () => {
  return (
    <nav className='nav'>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>

      <ul className='nav-links'>
        <li>
          <span>
            <MdPhone />
          </span>{' '}
          <span>+769 586 4558</span>
        </li>
        <li>
          <span>
            <IoIosMail />
          </span>{' '}
          <span>service@openauto.ca</span>
        </li>
        <li>
          <button className='btn'>Download the mobile app</button>
        </li>
      </ul>
    </nav>
  )
}

export default Header
