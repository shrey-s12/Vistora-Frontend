import React, { useState } from "react";
import Heater1 from "../../assets/Heater1.jpg";

const ShoppingCart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleDelete = () => alert("Item deleted.");
  const handleSaveForLater = () => alert("Item saved for later.");

  const product = {
    image: Heater1,
    name: "Havells Instanio Prime 25L Storage Water Heater",
    price: 7999,
    inStock: true,
    color: "White Mustard",
    size: "25 Litre",
    style: "Instanio Prime",
  };

  return (
    <div className="p-4 w-[75%] ml-3 mt-4 bg-white border">
      <h2 className="font-semibold mb-4 pb-4 border-b">Shopping Cart</h2>

      {/* Cart Item */}
      <div className="flex items-start border-b pb-4">
        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-48 h-48 object-contain"
        />

        {/* Details */}
        <div className="ml-4 flex-1">
          <h3 className="text-sm font-semibold">{product.name}</h3>
          <p className="text-green-600 text-sm">In stock</p>
          <p className="text-gray-500 text-sm">Eligible for FREE Shipping</p>
          <p className="text-sm">
            <strong>Colour:</strong> {product.color}
          </p>
          <p className="text-sm">
            <strong>Size:</strong> {product.size}
          </p>
          <p className="text-sm">
            <strong>Style Name:</strong> {product.style}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-4 ">
            {/* Quantity Selector */}
            <div className="flex items-center border rounded">
              <button
                className="px-2 py-1 bg-gray-200 hover:bg-gray-300"
                onClick={handleDecrement}
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className="px-2 py-1 bg-gray-200 hover:bg-gray-300"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>

            {/* Action Buttons */}
            <button
              className="text-sm text-blue-600 hover:underline"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              className="text-sm text-blue-600 hover:underline"
              onClick={handleSaveForLater}
            >
              Save for later
            </button>
          </div>
        </div>

        {/* Price */}
        <div className="text-right">
          <p className="text-lg font-semibold">₹{product.price.toLocaleString()}</p>
        </div>
      </div>

      {/* Subtotal */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-semibold">
          Subtotal ({quantity} item{quantity > 1 ? "s" : ""}):
        </p>
        <p className="text-lg font-semibold">
          ₹{(product.price * quantity).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ShoppingCart;
