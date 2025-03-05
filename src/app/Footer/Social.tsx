import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';   // Import your desired icon  


const Social = () => {
  return (
    <div className='flex flex-col items-center gap-4 lg:gap-16'>
      <section className='w-full mt-12 flex justify-center gap-4  '>
      <FontAwesomeIcon icon={faFacebookF} className='icon' />  
      <FontAwesomeIcon icon={faTwitter} className='icon' />  
      <FontAwesomeIcon icon={faInstagram} className='icon' />  
      </section>
      <p className='text-[0.7rem] font-open font-normal text-center'>&copy; Copyright 2018 Huddle. All rights reserved.</p>
    </div>
  )
}

export default Social
