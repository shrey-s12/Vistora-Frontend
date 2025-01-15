import React from 'react'
import watch1 from '../../assets/Watch1.jpg'
import watch2 from '../../assets/Watch2.jpg'
import watch3 from '../../assets/Watch3.jpg'
import watch4 from '../../assets/Watch4.jpg'
import watch5 from '../../assets/Watch5.jpg'
import watch6 from '../../assets/Watch6.jpg'
import watch7 from '../../assets/Watch7.jpg'
import watch8 from '../../assets/Watch8.jpg'
import watch9 from '../../assets/Watch9.jpg'
import watch10 from '../../assets/Watch10.jpg'
import watch11 from '../../assets/Watch11.jpg'
import watch12 from '../../assets/Watch12.jpg'
import MultiItem from './MultiItem'

const Section = () => {
    const watches = [watch1, watch2, watch3, watch4, watch5, watch6, watch7, watch8, watch9, watch10, watch11, watch12]
    return (
        <div>
            <MultiItem
                title="Up to 70% off on | Bestselling smartwatches"
                watches={watches} />
        </div>
    )
}

export default Section