import React from 'react'
import { Navigate } from 'react-router';

export default function AuthGuard( { children } ) {
  const user = true ;
  //  if not logged in redirect to Login page otherwise keep in feed
  if ( !user ) {
    return <Navigate to="/login" /> ;
  };
  return children ;
}
