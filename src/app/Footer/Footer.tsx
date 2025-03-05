import React from 'react'
import Logo from '../Header/Logo'
import Contacts from './Contacts'
import Social from './Social'

const Footer = () => {
  return (
    <div className='bg-very-dark-cyan text-white pt-24 pb-12 px-4 flex flex-col gap-4'>
      <Logo styles='invert brightness-0' />
      <Contacts />
      <Social />
    </div>
  )
}

export default Footer
