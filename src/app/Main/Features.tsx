import React from 'react'
import {data} from './data'
import Card from './Card'

const Features = () => {
  return (
    <div className='px-4 py-16 flex flex-col gap-8'>
      {
        data.map((feature, index) => (
           <Card key={index} component={feature} />
        ))
      }
    </div>
  )
}

export default Features
