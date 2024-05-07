import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Logo from './Logo'

const AuthPages = () => {
  return (
    <>
     <NavBar></NavBar>
        <Outlet />
    </>
  )
}

export default AuthPages