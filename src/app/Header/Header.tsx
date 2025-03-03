import React from 'react'
import Logo from './Logo'
import TryButton from './TryButton'

const Header = () => {
  return (
    <div className='bg-very-pale-cyan flex items-center justify-between py-8 px-4'>
      <Logo />
      <TryButton />
    </div>
  )
}

export default Header
