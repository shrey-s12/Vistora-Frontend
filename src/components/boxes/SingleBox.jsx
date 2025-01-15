import React from 'react'

const SingleBox = ({ title, img }) => {
    return (
        <div className="bg-white shadow-md p-3 w-full h-auto">
            <div className="mb-2">
                <h1 className="text-xl font-bold text-gray-800">{title}</h1>
            </div>
            <div className='mb-2'>
                <img src={img} alt="ElecronicsAssessories" className="w-full h-92 object-cover" />
            </div>
            <div>
                <button className="text-blue-600 text-xs mt-3">
                    See all deals
                </button>
            </div>
        </div>
    )
}

export default SingleBox