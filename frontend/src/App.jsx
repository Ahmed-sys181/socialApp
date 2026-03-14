import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Register from './features/auth/pages/Register.jsx'
import GuestGuard from './guards/GuestGuard.jsx'
import AuthGuard from './guards/AuthGuard.jsx'
import AuthLayout from "./layouts/AuthLayout.jsx"
import MainLayout from './layouts/MainLayout.jsx'
import Login from './features/auth/pages/Login.jsx'
import Feed from './features/feed/pages/Feed.jsx'
import Profile from './features/profile/pages/Profile.jsx'
import PostPage from './features/feed/pages/PostPage.jsx'
import Error from './errors/Error.jsx'

export default function App() {
  return (
      <BrowserRouter>
        <Routes >

                {/* Public routes */}

          <Route element={ <GuestGuard> <AuthLayout/> </GuestGuard> } >
            <Route path="/login" element={ <Login/> } />
            <Route path="/register" element={ <Register/> } />
          </Route>

                {/* Private routes */}

          <Route element={ <AuthGuard> <MainLayout/> </AuthGuard> } >
            <Route path="/" element={ <Feed/> } />
            <Route path="/profile/:id" element={ <Profile/> } />
            <Route path="/post/:id" element={ <PostPage/> } />
            <Route path="/error" element={ <Error/> } />
          </Route>

        </Routes>
      </BrowserRouter>
  )
}
