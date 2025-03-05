import React from 'react'
import GetStarted from './GetStarted'

const ReadyCard = () => {
  return (
    <div className='flex flex-col gap-4 items-center text-center rounded-xl shadow mx-4 px-4 py-8 
    relative top-10  bg-white '>
      <h2 className='text-very-dark-cyan  text-lg font-bold'>Ready To Build Your Community?</h2>
      <section className='w-full px-4'>
          <GetStarted />
      </section>
    </div>
  )
}

export default ReadyCard
