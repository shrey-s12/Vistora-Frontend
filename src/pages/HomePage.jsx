import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Carousel from '../components/carousel/Carousel'

const HomePage = () => {
    return (
        <div className='bg-black text-white'>
            <Navbar />
            <Header />
            <Carousel />
        </div>
    )
}

export default HomePage