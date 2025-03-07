import React from 'react'
import Contacts from './Contacts'
import Links from './Links'
import Icons from './Icons'

const Footer = () => {
  return (
    <div className='padx py-26 bg-primary-footer-bg'>
      <Contacts />
      <Links />
      <Icons />
    </div>
  )
}

export default Footer
