import React from 'react';
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

const Logo = () => {
    return (
        <Link to='/'>
            <button className="p-2 my-1 text-white font-bold text-3xl ml-5 hover:outline hover:outline-1 hover:outline-white">Vistora.in</button>
        </Link>
    );
};

const Address = () => {
    return (
        <button className="hidden p-1 my-1 items-center text-sm hover:outline hover:outline-1 hover:outline-white md:flex">
            <svg
                className="h-4 w-4 mt-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
            <div className="flex flex-col items-start">
                <span className="text-xs font-semibold text-gray-300">
                    Deliver to Shrey
                </span>
                <span className="text-sm font-bold">Moradabad 244001</span>
            </div>
        </button>
    );
};

const SearchBar = () => {
    const [searchCategory, setSearchCategory] = useState("all");
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    const CATEGORYES = ["All", "All Categories", "Electronics", "Mobiles", "Books", "Fashion", "Home", "Appliances"];
    return (
        <div className="flex flex-1 items-center">
            <div className="relative">
                <button
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                    className="flex items-center h-10 rounded-l-md font-semibold border-none bg-gray-300 px-2 text-black hover:bg-gray-200"
                >
                    {searchCategory === "all" ? "All" : searchCategory}
                    <IoMdArrowDropdown className="h-5 w-5 text-black" />
                </button>
                {isCategoryOpen && (
                    <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-md bg-white py-1 shadow-lg">
                        {CATEGORYES.map((category, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setSearchCategory(category);
                                    setIsCategoryOpen(false);
                                }}
                                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <input
                type="search"
                className="h-10 flex-1 rounded-none border-none bg-white px-2 text-black focus:outline-none"
                placeholder="Search Vistora.in"
            />
            <button className="h-10 rounded-r-md bg-[#febd69] px-3 hover:bg-[#f3a847]">
                <svg
                    className="h-5 w-5 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                </svg>
            </button>
        </div>
    );
};

const Language = () => {
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    const LANGUAGES = ["English - EN", "Hindi - HI", "Tamil - TA", "Telugu - TE", "Kannada - KN", "Gujarati - GU", "Marathi - MA", "Punjabi - PU"];
    return (
        <div className="relative hidden lg:block">
            <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center p-2 my-1 hover:outline hover:outline-1 hover:outline-white"
            >
                <img
                    src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                    alt="India"
                    className="h-4 w-6 object-contain"
                />
                <span className="text-sm font-bold">EN</span>
                <IoMdArrowDropdown className="mt-1" />
            </button>
            {isLanguageOpen && (
                <div className="absolute right-0 top-full z-10 mt-1 w-32 rounded-md bg-white py-1 shadow-lg">
                    {LANGUAGES.map((lang, i) => (
                        <button
                            key={i}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                        >
                            {lang}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const Account = () => {
    // const [hover, setHover] = useState(false);
    // onMouseEnter={(e) => setHover(true)} onMouseLeave={(e) => setHover(false)}
    return (
        <>
            <Link to="/profile" className='no-underline'>
                <div className="hidden lg:block">
                    <button className="flex flex-col p-1 my-1 items-start hover:outline hover:outline-1 hover:outline-white">
                        <span className="text-xs text-white no-underline">Hello, Shrey</span>
                        <span className="flex items-center font-bold text-white ">
                            Account & Lists
                            <IoMdArrowDropdown className="mt-2" />
                        </span>
                    </button>
                </div>
            </Link>

            {/* {
                hover &&
                <div className='container bg-white'>
                    <div></div>
                    <div></div>
                </div>
            } */}
        </>
    );
};

const ReturnAndOrders = () => {
    return (
        <div className="hidden p-1 my-1 hover:outline hover:outline-1 hover:outline-white lg:block" >
            <button className="flex flex-col items-start">
                <span className="text-xs text-white">Returns</span>
                <span className="font-semibold">& Orders</span>
            </button>
        </div>
    );
};

const Cart = () => {
    return (
        <Link to='/shopping-card' className="flex items-center p-1 my-1 mr-4 hover:outline hover:outline-1 hover:outline-white" >
            <button className="relative">
                <LiaShoppingCartSolid className="text-4xl" />
                <div className="absolute -top-1 -right-1 bg-yellow-500 text-xs text-white font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    0
                </div>
            </button>
            <span className="hidden font-bold md:inline">Cart</span>
        </Link>
    );
};

const Navbar = () => {
    return (
        <nav className="flex w-full flex-col bg-[#131921] py-1 text-white">
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
                <Logo />
                <Address />
                <SearchBar />
                <Language />
                <Account />
                <ReturnAndOrders />
                <Cart />

            </div>

            {/* Mobile Location */}
            <button className="flex items-center gap-1 border-t border-gray-700 p-2 text-sm hover:bg-gray-800 md:hidden">
                <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Delivering to Mumbai 400001 - Update location</span>
            </button>
        </nav>
    );
};

export default Navbar;
