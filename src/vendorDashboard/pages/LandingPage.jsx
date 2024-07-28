import React from 'react'
import Navbar from '../components/Navbar';

import { Outlet } from 'react-router-dom';

function LandingPage() {
  return (
    <>
    <section className='landingpage'>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </section>
    </>
  )
}

export default LandingPage;