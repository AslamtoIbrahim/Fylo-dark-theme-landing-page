import React from 'react'
import {locations} from '../Main/data'
import ItemContact from './ItemContact';
const Contacts = () => {
  return (
    <div>
      <section className="flex flex-col gap-4 lg:grid lg:grid-cols-2 xl:gap-x-16 lg:gap-8    ">
       
        <ItemContact links={locations[0]} />
        <div className='flex flex-col gap-4 lg:gap-6 xl:gap-8'>
          <ItemContact links={locations[1]} />
          <ItemContact links={locations[2]} />
        </div>
      </section>
    </div>
  )
}

export default Contacts
