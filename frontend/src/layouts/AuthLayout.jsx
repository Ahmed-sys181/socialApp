import React from 'react'
import { Outlet } from 'react-router'

export default function AuthLayout() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col '>
      <div className='absolute top-[10%] text-2xl ' >Welcome</div>
      <Outlet/>
    </div>
  )
}
