import React from "react";

const ShoppingDetails = ({ subtotal, itemCount }) => {
  return (
    <div className="p-4 w-[25%] h-[20%] bg-white rounded-lg shadow-md">
      <h2 className="font-semibold text-lg">Order Summary</h2>
      <p className="mt-4">
        Subtotal ({itemCount} item{itemCount > 1 ? "s" : ""}):{" "}
        <strong>₹{subtotal.toLocaleString()}</strong>
      </p>
      <button className="w-full mt-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default ShoppingDetails;
