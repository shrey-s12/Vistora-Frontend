import React from 'react'
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import HeaderImage from '../../assets/header-image.jpg'

const Products = [
    "Fresh", "MX Player", "Sell", "Vistora Pay", "Gift Cards", "Buy Again", "VistoraBasics", "Gift Ideas", "Today's Deals", "Customer Service",
];

const Product = () => {
    return (
        <div className='flex'>
            <div className='flex ml-2 p-2 hover:border hover:border-white'>
                <HiOutlineBars3 className='text-2xl' />
                <p>All</p>
            </div>

            {Products.map((product, index) => (
                <p key={index} className='p-2 hover:border hover:border-white'>{product}</p>
            ))}

            <div className='flex ml-2 p-2 hover:border hover:border-white'>
                <p>Browsing History</p>
                <IoMdArrowDropdown className='text-2xl' />
            </div>
        </div>
    )
}

const Image = () => {
    return (
        <div className='flex items-center'>
            <img src={HeaderImage} alt='header' className='w-48' />
        </div>
    )
}

const Header = () => {
    return (
        <div className='flex items-center bg-gray-700 text-white'>
            <Product />
            <Image />
        </div>
    )
}

export default Header