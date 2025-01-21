import React from 'react'
import Carousel from '../components/carousel/Carousel'
import Boxes from '../components/boxes/Boxes'
import CardProducts from '../components/cardProduct/CardProducts'

const HomePage = () => {
    return (
        <div className='bg-blue-50 text-white min-h-screen flex flex-col'>
            <Carousel />
            <div className='mt-[-50vh] z-20'>
                <Boxes />
            </div>
            <CardProducts />
        </div>
    )
}

export default HomePage