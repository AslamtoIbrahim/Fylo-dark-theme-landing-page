import React from 'react'
import Image from 'next/image'
import logo from '../../../public/source/images/logo.svg'
const Logo = () => {
  return (
    <div>
      <Image className='h-auto w-18' src={logo} alt='logo' width={176} height={52} />
    </div>
  )
}

export default Logo
