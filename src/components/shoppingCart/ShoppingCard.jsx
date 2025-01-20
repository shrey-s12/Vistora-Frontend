import React from "react";
import { products } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { toggleItem, changeQuantity } from "../../slices/cartSlice";

function CartItem({ product }) {
  const dispatch = useDispatch();
  const id = product.id;

  const handleToggle = () => {
    dispatch(toggleItem(id));
  };
  const handleDecrement = () => {
    dispatch(changeQuantity({ id, increament: -1 }));
  };
  const handleIncrement = () => {
    dispatch(changeQuantity({ id, increament: 1 }));
  };
  return <>
    <div key={product.id} className="flex items-start border-b pb-4 mb-4">
      {/* Image */}
      <div className="justify-center items-center flex gap-2">
        <input type="checkbox" className="items-center" checked={product.selected} onChange={handleToggle} />
        <img
          src={product.image}
          alt={product.title}
          className="w-48 h-48 object-contain"
        />
      </div>

      {/* Details */}
      <div className="ml-4 flex-1">
        <h3 className="text-sm font-semibold">{product.title}</h3>
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
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="px-4">{product.quantity}</span>
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
          // onClick={() => handleDelete(product.id)}
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
  </>
}

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.items);
  return (
    <div className="p-4 w-[80%] ml-3 mt-4 bg-white">
      <div className="boreder-b pb-4 mb-4">
        <h2 className="font-semibold">Shopping Cart</h2>
        <button>Deselect all</button>
      </div>

      {cartItems.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}

      {/* Subtotal */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-semibold">
          Subtotal ({cartItems.reduce((count, product) => count + product.quantity, 0)}{" "}
          item{products.length > 1 ? "s" : ""});
        </p>
        <p className="text-lg font-semibold">
          {/* ₹{calculateSubtotal().toLocaleString()} */}
          ₹{cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ShoppingCart;
