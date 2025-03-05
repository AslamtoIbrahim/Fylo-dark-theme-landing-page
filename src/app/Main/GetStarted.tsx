import React from 'react'

type prop = {
  styles?: string;
}
const GetStarted = ({styles}:prop) => {
  return (
    <button className={`w-full bg-pink text-white text-sm px-4 py-3 rounded-full font-open
      shadow-xl cursor-pointer hover:opacity-80 ${styles}`}>
        Get Started For Free
    </button>
  )
}

export default GetStarted
