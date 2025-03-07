import React from 'react'
import {testimonials} from './data'
import Testimonial from './Testimonial'

const Comments = () => {
  return (
    <div className='bg-primary-main-bg px-8 flex flex-col gap-6 py-12 quote'>
      {
        testimonials.map((testimonial, index) => (
          <Testimonial key={index} data={testimonial} />
        ))
      }
    </div>
  )
}

export default Comments
