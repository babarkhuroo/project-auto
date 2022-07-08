import React from 'react'
import '../styles/Section.css'
import pickup_img from '../assets/picku_service.png'

const Section = () => {
  return (
    <div className='section'>
      <main className='section-content'>
        <h3>Focused on Time Saving</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was
        </p>
        <button className='btn'>Download the mobile app</button>
        <img src={pickup_img} alt='pickup' className='pickup-img' />
      </main>
    </div>
  )
}

export default Section
