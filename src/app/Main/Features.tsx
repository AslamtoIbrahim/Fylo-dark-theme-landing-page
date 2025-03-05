import React from 'react'
import {data} from './data'
import Card from './Card'

const Features = () => {
  return (
    <div className='px-4 md:px-8 lg:px-12 py-16 flex flex-col gap-8'>
      {
        data.map((feature, index) => (
           <Card key={index} component={feature} index={index} />
        ))
      }
    </div>
  )
}

export default Features
