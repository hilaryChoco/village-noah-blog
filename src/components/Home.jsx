import React from 'react'
import { Header, Services, Blog } from '../containers'
import Brand from './brand/Brand'

function Home() {
  return (
    <>
        <Header />
        <Brand />
        <Services />
        <Blog />
    </>
  )
}

export default Home