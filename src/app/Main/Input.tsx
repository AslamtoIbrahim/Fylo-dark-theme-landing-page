'use client'
import React, { useRef, useState } from 'react'
import Button from './Button';

 

const Input = () => {
  const useref = useRef<HTMLInputElement | null>(null)
  const [isValid, setIsValid] = useState(true);
  const validateEmail = () =>{
    const email = useref.current?.value || '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setIsValid(emailRegex.test(email));
  }
  return (
    <div className='flex flex-col gap-2 md:flex-row md:relative lg:gap-6'>
      <div className='bg-white py-3 rounded-full flex items-start md:w-full'>
        <input ref={useref} className='placeholder-primary-intro-bg/70 text-primary-footer-bg  mx-6 w-full outline-none border-none   ' type="text" placeholder='eamil@example.com' />
      </div>
      {!isValid && <p className='text-accent-error text-[0.6rem] lg:text-sm text-start ml-6 py-1 
      md:absolute left-0 -bottom-6 lg:-bottom-8'>Please enter a valid email address</p>}
      <Button text="Get Started For Free" styles="w-full lg:w-fit lg:px-8 " onclick={validateEmail} />
    </div>
  )
}

export default Input
