import React from 'react'
import { Navigate } from 'react-router';

export default function GuestGuard({ children }) {

  const auth = localStorage.getItem("user") ;
  const user = JSON.parse(auth);
  if (user){
    return <Navigate to="/" replace /> ;
  }

  return children
}
