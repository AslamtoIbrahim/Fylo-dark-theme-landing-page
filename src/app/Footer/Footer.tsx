import React from 'react'
import Contacts from './Contacts'
import Links from './Links'
import Icons from './Icons'
import Logo from '../Header/Logo'

const Footer = () => {
  return (
    <div className='padx py-26 lg:py-32 xl:py-46 bg-primary-footer-bg flex flex-col  gap-6'>
      <Logo styles='lg:w-32 xl:w-40' />
      <section className='flex flex-col gap-6 xl:flex-row xl:items-start'>
        <Contacts />
        <Links />
        <Icons />
      </section>
    </div>
  )
}

export default Footer
