import React from 'react'
import GetStarted from './GetStarted'

const ReadyCard = () => {
  return (
    <div className='flex flex-col gap-4 items-center text-center rounded-xl shadow mx-4 px-4 md:mx-8 py-8 
    relative top-10  bg-white lg:mx-32 lg:gap-8 '>
      <h2 className='text-very-dark-cyan text-lg font-bold lg:text-2xl'>Ready To Build Your Community?</h2>
      <section className='w-full px-4'>
          <GetStarted styles='py-4' />
      </section>
    </div>
  )
}

export default ReadyCard
