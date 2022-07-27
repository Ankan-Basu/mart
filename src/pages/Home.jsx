import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import MainMenu from '../components/MainMenu'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <>
    <Navbar />
    <Banner />
    <MainMenu />
    <Newsletter />
    <Footer />
    </>
  )
}

export default Home