import React from 'react'
import Logo from '../Header/Logo'
import Contacts from './Contacts'
import Social from './Social'

const Footer = () => {
  return (
    <div className='bg-very-dark-cyan text-white pt-24 pb-12 px-4 flex flex-col gap-4 lg:px-12 
    lg:flex-row lg:gap-16 lg:items-start'>
      <section className='flex flex-col gap-4 lg:gap-8 '>
        <Logo styles='invert brightness-0' />
        <Contacts />
      </section>
      <Social />
    </div>
  )
}

export default Footer
