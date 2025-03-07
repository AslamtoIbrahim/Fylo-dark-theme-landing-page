import React from 'react'
import {locations} from '../Main/data'
import ItemContact from './ItemContact';
const Contacts = () => {
  return (
    <div>
      <section className="flex flex-col gap-4 lg:gap-6 xl:gap-8 ">
        {locations.map((item, i) => {
          return <ItemContact key={i} links={item} />;
        })}
      </section>
    </div>
  )
}

export default Contacts
