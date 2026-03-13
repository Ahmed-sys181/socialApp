import React from 'react'
import { Outlet } from 'react-router'

export default function AuthLayout() {
  return (
    <>
      <div>Navbar will be here </div>
      <Outlet/>
    </>
  )
}
