import React from 'react'
import Box1 from './Box1'

const Boxes = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            <Box1 />
            <Box1 />
            <Box1 />
            <Box1 />
            <Box1 />
            <Box1 />
            <Box1 />
            <Box1 />
        </div>
    )
}

export default Boxes
