import React from 'react'
import Intro from './Intro'
import Features from './Features'
import Productive from './Productive'
import Comments from './Comments'
import SingUp from './SingUp'

const Main = () => {
  return (
    <div className=' bg-primary-main-bg '>
      <Intro />
      <Features />
      <Productive />
      <Comments />
      <SingUp />
    </div>
  )
}

export default Main
