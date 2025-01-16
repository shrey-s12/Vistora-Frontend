import React, { useState } from "react";
import ShoppingCard from "../components/shoppingCart/ShoppingCard";
import ShoppingDetails from "../components/shoppingCart/ShoppingDetails";
import Heater1 from "../assets/Heater1.jpg";
import Heater2 from "../assets/Heater2.jpg";

const ShoppingCardPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: Heater1,
      name: "Havells Instanio Prime 25L Storage Water Heater",
      price: 7999,
      inStock: true,
      color: "White Mustard",
      size: "25 Litre",
      style: "Instanio Prime",
      quantity: 1,
    },
    {
      id: 2,
      image: Heater2,
      name: "Haier Aquad 25L Storage Water Heater",
      price: 9300,
      inStock: true,
      color: "White",
      size: "25 Litre",
      style: "Aquad Pro",
      quantity: 1,
    },
  ]);

  // Calculate subtotal and item count dynamically
  const calculateTotals = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return { subtotal, itemCount };
  };

  const { subtotal, itemCount } = calculateTotals();

  const handleQuantityChange = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
            ...item,
            quantity: increment
              ? item.quantity + 1
              : Math.max(1, item.quantity - 1),
          }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen p-4">
      <div className="flex gap-4">
        {/* Pass necessary props to ShoppingCard */}
        <ShoppingCard
          cartItems={cartItems}
          onQuantityChange={handleQuantityChange}
          onDelete={handleDelete}
        />
        {/* Pass dynamic subtotal and item count to ShoppingDetails */}
        <ShoppingDetails subtotal={subtotal} itemCount={itemCount} />
      </div>
    </div>
  );
};

export default ShoppingCardPage;
