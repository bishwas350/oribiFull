import React from 'react'
import Header from './layouts/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Rootlayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Rootlayout