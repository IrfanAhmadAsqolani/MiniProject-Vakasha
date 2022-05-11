import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'
import Subscribe from '../Component/Subscribe/Subscribe'
import Header from '../Component/Header/Header'
import InputSearch from '../Component/InputSearch/InputSearch'

function Find() {
  return (
    <>
      <Navbar/>
      <Header />
      <InputSearch/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default Find