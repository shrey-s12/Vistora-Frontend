import React from "react";

const ShoppingCard = ({ cartItems, onQuantityChange, onDelete }) => {
  return (
    <div className="p-4 w-[75%] bg-white rounded-lg shadow-md">
      <h2 className="font-semibold text-lg mb-4 pb-4 border-b">Shopping Cart</h2>
      {cartItems.map((product) => (
        <div key={product.id} className="flex items-start border-b pb-4 mb-4">
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-contain"
          />

          {/* Product Details */}
          <div className="ml-4 flex-1">
            <h3 className="text-sm font-semibold">{product.name}</h3>
            <p className="text-green-600 text-sm mt-1">In stock</p>
            <p className="text-gray-500 text-sm">Eligible for FREE Shipping</p>
            <p className="text-sm mt-1">
              <strong>Colour:</strong> {product.color}
            </p>
            <p className="text-sm">
              <strong>Size:</strong> {product.size}
            </p>
            <p className="text-sm">
              <strong>Style Name:</strong> {product.style}
            </p>

            {/* Quantity & Actions */}
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center border rounded">
                <button
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300"
                  onClick={() => onQuantityChange(product.id, false)}
                >
                  -
                </button>
                <span className="px-4">{product.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300"
                  onClick={() => onQuantityChange(product.id, true)}
                >
                  +
                </button>
              </div>
              <button
                className="text-sm text-blue-600 hover:underline"
                onClick={() => onDelete(product.id)}
              >
                Delete
              </button>
              <button className="text-sm text-blue-600 hover:underline">
                Save for later
              </button>
            </div>
          </div>

          {/* Product Price */}
          <div className="text-right">
            <p className="text-lg font-semibold">
              ₹{(product.price * product.quantity).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCard;
