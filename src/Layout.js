import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './web/comp/Footer'
import Header from './web/comp/Header'

export default function Layout() {
  return (
    <>
        <Header></Header>
        <div>
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </>
  )
}
