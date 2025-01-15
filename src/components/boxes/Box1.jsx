import React from 'react'


const Box1 = ({ title, img1, img2, img3, img4, img1Title, img2Title, img3Title, img4Title }) => {
    return (
        <div className="bg-white shadow-md p-3 w-full h-auto">
            <div className="mb-2">
                <h1 className="text-xl font-bold text-gray-800">{title}</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-2">
                <div className="flex flex-col">
                    <img src={img1} alt='kichen' className="w-full h-24 object-cover" />
                    <p className="text-xs text-gray-900">{img1Title}</p>
                </div>
                <div className="flex flex-col">
                    <img src={img2} alt='home decor' className="w-full h-24 object-cover" />
                    <p className="text-xs text-gray-900">{img2Title}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-2">
                <div className="flex flex-col">
                    <img src={img3} alt='furniture' className="w-full h-24 object-cover" />
                    <p className="text-xs text-gray-900">{img3Title}</p>
                </div>
                <div className="flex flex-col">
                    <img src={img4} alt='home improvement' className="w-full h-24 object-cover" />
                    <p className="text-xs text-gray-900">{img4Title}</p>
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
