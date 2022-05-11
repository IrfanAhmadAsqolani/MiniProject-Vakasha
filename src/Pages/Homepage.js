import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import Subscribe from '../Component/Subscribe/Subscribe'
import PopularCities from '../Component/Popular_Cities/PopularCities'
import TrendingPlaces from '../Component/Trending_Places/TrendingPlaces'

function Homepage() {
  return (
    <>
        <Navbar/>
        <Header/>
        <PopularCities/>
        <TrendingPlaces />
        <Subscribe/>
        <Footer/>
    </>
    
  )
}

export default Homepage