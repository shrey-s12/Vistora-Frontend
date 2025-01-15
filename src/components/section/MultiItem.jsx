import React from 'react'

const MultiItem = ({ title, watches }) => {
    return (
        <div className='flex  bg-white mx-4'>
            <div className='flex justify-between w-full p-3'>
                <div className="mb-2">
                    <h1 className="text-xl font-bold text-gray-800">{title}</h1>
                </div>
                <div>
                    <button className="text-blue-600 text-xs">
                        See all deals
                    </button>
                </div>
            </div>
            <div className='flex '>
                {watches.map((watch, index) => (
                    <div key={index}>
                        <div>
                            <img src={watch} alt='kichen' className="w-full h-24 object-cover" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MultiItem