import React from 'react'
import Box1 from './Box1'
import Kichen from '../../assets/kichen.jpg'
import HomeDecor from '../../assets/Homedecor.jpg'
import Furniture from '../../assets/Furniture.jpg'
import HomeImprovement from '../../assets/HomeImprovement.jpg'
import RealmeLogo from '../../assets/realmeLogo.jpg'
import SamsungLogo from '../../assets/SamsungLogo.jpg'
import OnePlusLogo from '../../assets/OnePlusLogo.jpg'
import MiLogo from '../../assets/MiLogo.jpg'
import SingleBox from './SingleBox'
import ElecronicsAssessories from '../../assets/ElectronicImage.jpg'

const Boxes = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            <Box1
                title="Minimum 50% off | Home, kitchen & more"
                img1={Kichen} img1Title="Kitchen Essentials"
                img2={HomeDecor} img2Title="Home Decor"
                img3={Furniture} img3Title="Furniture"
                img4={HomeImprovement} img4Title="Home Improvement"
            />
            <Box1
                title="Deals on accessories for your top smartphone brands"
                img1={RealmeLogo} img1Title="Realme | Up to 70% off"
                img2={SamsungLogo} img2Title="Samsung | Up to 60% off"
                img3={OnePlusLogo} img3Title="OnePlus | Up to 30% off"
                img4={MiLogo} img4Title="Mi | Up to 70% off"
            />
            <Box1
                title="Minimum 50% off | Home, kitchen & more"
                img1={Kichen} img1Title="Kitchen Essentials"
                img2={HomeDecor} img2Title="Home Decor"
                img3={Furniture} img3Title="Furniture"
                img4={HomeImprovement} img4Title="Home Improvement"
            />
            <Box1
                title="Deals on accessories for your top smartphone brands"
                img1={RealmeLogo} img1Title="Realme | Up to 70% off"
                img2={SamsungLogo} img2Title="Samsung | Up to 60% off"
                img3={OnePlusLogo} img3Title="OnePlus | Up to 30% off"
                img4={MiLogo} img4Title="Mi | Up to 70% off"
            />
            <Box1
                title="Minimum 50% off | Home, kitchen & more"
                img1={Kichen} img1Title="Kitchen Essentials"
                img2={HomeDecor} img2Title="Home Decor"
                img3={Furniture} img3Title="Furniture"
                img4={HomeImprovement} img4Title="Home Improvement"
            />
            <SingleBox
                title="Up to 75% off | Electronics & accessories"
                img={ElecronicsAssessories}
            />
            <Box1
                title="Minimum 50% off | Home, kitchen & more"
                img1={Kichen} img1Title="Kitchen Essentials"
                img2={HomeDecor} img2Title="Home Decor"
                img3={Furniture} img3Title="Furniture"
                img4={HomeImprovement} img4Title="Home Improvement"
            />
            <Box1
                title="Deals on accessories for your top smartphone brands"
                img1={RealmeLogo} img1Title="Realme | Up to 70% off"
                img2={SamsungLogo} img2Title="Samsung | Up to 60% off"
                img3={OnePlusLogo} img3Title="OnePlus | Up to 30% off"
                img4={MiLogo} img4Title="Mi | Up to 70% off"
            />
        </div>
    )
}

export default Boxes
