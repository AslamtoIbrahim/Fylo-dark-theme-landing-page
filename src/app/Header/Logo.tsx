import React from 'react'
import Image from 'next/image'
import logo from '../../../public/sources/images/logo.svg'

type prop = {
  styles?: string;
}
const Logo = ({styles} : prop) => {
  return (
    <div>
      <Image className={`h-auto w-32 ${styles}`} src={logo} alt="logo" width={240} height={39} />
    </div>
  )
}

export default Logo
