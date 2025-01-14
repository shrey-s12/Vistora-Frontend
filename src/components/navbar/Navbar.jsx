import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { LiaShoppingCartSolid } from "react-icons/lia";

const Logo = () => {
    return (
        <h1 className="text-white font-bold text-2xl">Vistora.in</h1>
    );
};

const Address = () => {
    return (
        <div className="flex items-center text-white space-x-2">
            <IoLocationOutline className="text-lg" />
            <div>
                <p className="text-sm">Deliver to Shrey</p>
                <p className="text-xs font-semibold">Moradabad 244001</p>
            </div>
        </div>
    );
};

const SearchBar = () => {
    const all = ["All Categories", "Electronics", "Mobiles", "Books", "Fashion", "Home", "Appliances"];
    return (
        <div className="flex items-center bg-white rounded-md overflow-hidden w-full max-w-3xl">
            <select className="bg-gray-100 text-sm p-2 border-r">
                <option value="all">All</option>
                {all.map((category, index) => (
                    <option key={index}>{category}</option>
                ))}
            </select>
            <input
                type="text"
                className="flex-grow p-2 outline-none text-sm"
                placeholder="Search Vistora.in"
            />
            <button className="p-2 bg-yellow-500 text-white">
                <IoSearchSharp />
            </button>
        </div>
    );
};

const Language = () => {
    const languages = ["English - EN", "Hindi - HI", "Tamil - TA", "Telugu - TE", "Kannada - KN", "Gujarati - GU", "Marathi - MA", "Punjabi - PU"];
    return (
        <div className='flex items-center space-x-2'>
            <img src="https://flagicons.lipis.dev/flags/4x3/in.svg" alt="IN" className="h-4" />
            <select className="bg-gray-100 text-sm p-2">
                {languages.map((language, index) => (
                    <option key={index}>{language}</option>
                ))}
            </select>
        </div>
    );
};

const Account = () => {
    return (
        <div className="text-white text-sm">
            <p>Hello, Shrey</p>
            <p className="font-semibold">Account & Lists</p>
        </div>
    );
};

const ReturnAndOrders = () => {
    return (
        <div className="text-white text-sm">
            <p>Returns</p>
            <p className="font-semibold">& Orders</p>
        </div>
    );
};

const Cart = () => {
    return (
        <div className="text-white flex items-center space-x-2">
            <LiaShoppingCartSolid className="text-2xl" />
            <p className="hidden md:inline">Cart</p>
        </div>
    );
};

const Left = () => {
    return (
        <div className="flex items-center space-x-4">
            <Logo />
            <Address />
        </div>
    );
};

const Middle = () => {
    return (
        <div className="flex-grow flex items-center justify-center">
            <SearchBar />
        </div>
    );
};

const Right = () => {
    return (
        <div className="flex items-center space-x-6">
            <Language />
            <Account />
            <ReturnAndOrders />
            <Cart />
        </div>
    );
};

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-gray-950 text-white">
            <Left />
            <Middle />
            <Right />
        </nav>
    );
};

export default Navbar;
