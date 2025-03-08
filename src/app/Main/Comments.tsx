import React from 'react'
import {testimonials} from './data'
import Testimonial from './Testimonial'

const Comments = () => {
  return (
    <div className='bg-primary-main-bg padx px-8 flex flex-col lg:flex-row gap-6 py-12 lg:py-16 xl:gap-12 xl:py-24 quote'>
      {
        testimonials.map((testimonial, index) => (
          <Testimonial key={index} data={testimonial} />
        ))
      }
    </div>
  )
}

export default Comments
