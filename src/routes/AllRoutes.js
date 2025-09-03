import React from 'react'
import { Route,Routes } from 'react-router-dom'
import {HomePage} from '../pages/Home/HomePage'
import { ProductsList ,ProductDetail} from '../pages'


export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsList />} />
      <Route path='/products/:id' element={<ProductDetail />} />
    </Routes>
  )
}
