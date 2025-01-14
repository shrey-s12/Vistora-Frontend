import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Carousel from '../components/carousel/Carousel'
import Boxes from '../components/boxes/Boxes'

const HomePage = () => {
    return (
        <div className='bg-blue-200 text-white'>
            <Navbar />
            <Header />
            <Carousel />
            <Boxes />
        </div>
    )
}

export default HomePage