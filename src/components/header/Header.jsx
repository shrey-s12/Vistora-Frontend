import React from 'react'
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import HeaderImage from "../../assets/header-image.jpg";
import { headerProducts } from "../../data";

const Product = () => {
    return (
        <div className='flex items-center w-[80%]'>
            <div className='flex ml-4 p-2 hover:outline hover:outline-1 hover:outline-white'>
                <HiOutlineBars3 className='text-2xl' />
                <span>All</span>
            </div>

            {headerProducts.map((product, index) => (
                <span key={index} className='p-2 hover:outline hover:outline-1 hover:outline-white'>{product.name}</span>
            ))}

            <div className='flex p-2 hover:outline hover:outline-1 hover:outline-white'>
                <span>Browsing History</span>
                <IoMdArrowDropdown className='text-2xl' />
            </div>


        </div>
    )
}

const Image = () => {
    return (
        <div className='w-[20%]'>
            <img src={HeaderImage} alt='header' />
        </div>
    )
}

const Header = () => {
    return (
        <div className='flex items-center bg-gray-800 text-white'>
            <Product />
            <Image />
        </div>
    )
}

export default Header