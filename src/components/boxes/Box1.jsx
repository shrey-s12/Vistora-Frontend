import React from 'react'
import Kichen from '../../assets/kichen.jpg'
import HomeDecor from '../../assets/homedecor.jpg'
import Furniture from '../../assets/furniture.jpg'
import HomeImprovement from '../../assets/homeimprovement.jpg'

const Box1 = () => {
    return (
        <div className="bg-white shadow-md p-3 w-full h-auto">
            <div className="mb-2">
                <h1 className="text-xl font-bold text-gray-800">Minimum 50% off | Home, kitchen & more</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-2">
                <div className="flex flex-col">
                    <img src={Kichen} alt='kichen' className="w-full h-24 object-cover" />
                    <p className="text-xs text-gray-900">Kitchen Essentials</p>
                </div>
                <div className="flex flex-col">
                    <img src={HomeDecor} alt='home decor' className="w-full h-24 object-cover" />
                    <p className="text-xs text-gray-900">Home Decor</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-2">
                <div className="flex flex-col">
                    <img src={Furniture} alt='furniture' className="w-full h-24 object-cover" />
                    <p className="text-xs text-gray-900">Furniture</p>
                </div>
                <div className="flex flex-col">
                    <img src={HomeImprovement} alt='home improvement' className="w-full h-24 object-cover" />
                    <p className="text-xs text-gray-900">Home Improvement</p>
                </div>
            </div>
            <div>
                <button className="text-blue-600 text-xs">
                    See all deals
                </button>
            </div>
        </div>
    )
}

export default Box1
