import React, { useState } from 'react'
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import HeaderImage from "../../assets/header-image.jpg";
import { headerProducts } from "../../data";
import SideMenu from './SideMenu';

const Product = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className='flex items-center w-[80%]'>
            <div
                className='flex ml-4 p-2 hover:outline hover:outline-1 hover:outline-white'
                onClick={toggleMenu}
            >
                <HiOutlineBars3 className='text-2xl' />
                <button>All</button>
            </div>

            <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />

            {headerProducts.map((product, index) => (
                <button key={index} className='p-2 hover:outline hover:outline-1 hover:outline-white'>{product.name}</button>
            ))}

            <div className='flex p-2 hover:outline hover:outline-1 hover:outline-white'>
                <button>Browsing History</button>
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