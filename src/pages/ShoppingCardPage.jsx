import React from 'react'
import ShoppingCard from '../components/shoppingCart/ShoppingCard'
import ShoppingDetails from '../components/shoppingCart/ShoppingDetails'

const ShoppingCardPage = () => {
  return (
    <div className="bg-gray-100 w-full min-h-screen p-4">
      <div className="flex gap-4">
        <ShoppingCard />
        <ShoppingDetails />
      </div>
    </div>
  )
}

export default ShoppingCardPage