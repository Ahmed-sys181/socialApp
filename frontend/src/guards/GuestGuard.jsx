import React, { Children } from 'react'
import { Navigate } from 'react-router';

export default function GuestGuard({ children }) {

  const user = true ;
  if (user){
    return <Navigate to="/" /> ;
  }

  return children
}
