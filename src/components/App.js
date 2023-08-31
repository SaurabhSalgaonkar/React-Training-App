import React, { Fragment } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import ContactUs from './ContactUs'
import { Route, Routes } from 'react-router-dom'
import Fallback from './Fallback'
import Hotels from './Hotels'
import FeatureHotels from './FeatureHotels'
import HotelID from './HotelID'
import Admin from './Admin'
import Category from './Category'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path='Contact' element={<ContactUs />} />
        <Route path='Hotels' element={<Hotels />}>
          <Route index element={<FeatureHotels />} />
          <Route path='featured' element={<FeatureHotels />} />
          <Route path=':hotelid' element={<HotelID />}>
            <Route path=':category' element={<Category />} />
          </Route>
          <Route path='admin' element={<Admin />} />
          {/* <Route path='viewed' element={<ViewedHotels />} /> */}
        </Route>
        <Route path='*' element={<Fallback />} />
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App