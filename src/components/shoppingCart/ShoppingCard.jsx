import React, { useState } from "react";
import Heater1 from "../../assets/Heater1.jpg";
import Heater2 from "../../assets/Heater2.jpg";

const ShoppingCart = () => {
  const [products, setProducts] = useState([
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

  const handleIncrement = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecrement = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleDelete = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const calculateSubtotal = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return (
    <div className="p-4 w-[80%] ml-3 mt-4 bg-white">
      <div className="boreder-b pb-4 mb-4">
        <h2 className="font-semibold">Shopping Cart</h2>
        <button>Deselect all</button>
      </div>

      {products.map((product) => (
        <div key={product.id} className="flex items-start border-b pb-4 mb-4">
          {/* Image */}
          <div className="justify-center items-center flex gap-2">

            <input type="checkbox" className="items-center" />
            <img
              src={product.image}
              alt={product.name}
              className="w-48 h-48 object-contain"
            />
          </div>

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
            <div className="flex items-center gap-4 mt-2">
              {/* Quantity Selector */}
              <div className="flex items-center border rounded">
                <button
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300"
                  onClick={() => handleDecrement(product.id)}
                >
                  -
                </button>
                <span className="px-4">{product.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300"
                  onClick={() => handleIncrement(product.id)}
                >
                  +
                </button>
              </div>

              {/* Action Buttons */}
              <button
                className="text-sm text-blue-600 hover:underline"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
              <button className="text-sm text-blue-600 hover:underline">
                Save for later
              </button>
            </div>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="text-lg font-semibold">
              ₹{(product.price * product.quantity).toLocaleString()}
            </p>
          </div>
        </div>
      ))}

      {/* Subtotal */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-semibold">
          Subtotal ({products.reduce((count, product) => count + product.quantity, 0)}{" "}
          item{products.length > 1 ? "s" : ""}):
        </p>
        <p className="text-lg font-semibold">
          ₹{calculateSubtotal().toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ShoppingCart;
