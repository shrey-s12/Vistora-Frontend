import React from 'react'
import Carousel from '../components/carousel/Carousel'
import Boxes from '../components/boxes/Boxes'
import CardProducts from '../components/cardProduct/CardProducts'
// import Section from '../components/section/Section'

const HomePage = () => {
    return (
        <div className='bg-blue-200 text-white'>
            <Carousel />
            <Boxes />
            {/* <Section /> */}
            <CardProducts />
        </div>
    )
}

export default HomePage