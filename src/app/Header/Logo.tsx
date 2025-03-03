import React from 'react'
import Image from 'next/image'
import logo from '../../../public/sources/images/logo.svg'

const Logo = () => {
  return (
    <div>
      <Image className='h-auto w-32' src={logo} alt="logo" width={240} height={39} />
    </div>
  )
}

export default Logo
