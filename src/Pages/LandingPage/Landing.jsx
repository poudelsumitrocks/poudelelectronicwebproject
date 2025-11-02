import React from 'react'
import Navbar from '../../Component/Header/Navbar'
// import ProductNav from '../../Component/Header/ProductNav'
import { Outlet } from 'react-router'

export default function Landing() {
  return (
    <div className="">
        <Navbar/>
        <div className='mt-20'> 
        {/* <ProductNav/> */}
        </div>
        <section>
          <Outlet/>
        </section>
    </div>
  )
}
