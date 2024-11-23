import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayOut = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-[1440px] h-screen bg-black rounded-3xl flex shadow-md overflow-hidden'>
        <div className='w-full h-full font-poppins flex'>
        <Navbar/>
        <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default RootLayOut