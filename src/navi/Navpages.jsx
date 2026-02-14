import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Listpage from '../pages/Listpage'
import Mybooking from '../pages/Mybooking'

const Navpages = () => {
  return (
    <Routes>
        <Route path='/list' element={<Listpage />} />
        <Route path='/booking' element={<Mybooking />} />
                <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default Navpages