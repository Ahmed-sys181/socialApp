import React from 'react'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <>
      <div>
        Main layout
      </div>
      <Outlet/>
    </>
  )
}
