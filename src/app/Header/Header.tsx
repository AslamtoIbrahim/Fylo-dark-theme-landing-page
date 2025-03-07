import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'

const Header = () => {
  return (
    <div className='flex items-center justify-between bg-primary-intro-bg py-6 padx '>
      <Logo />
      <NavLinks />
    </div>
  )
}

export default Header
