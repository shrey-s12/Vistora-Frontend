import React from "react";
import { useSelector } from "react-redux";

const ShoppingDetails = () => {
    const cartItems = useSelector(state => state.cart.items);
    return (
        <div className="p-4 w-[20%] h-[20%] mt-4 bg-white">
            <h2 className="font-semibold text-lg">Order Summary</h2>
            <p className="mt-4">
                Subtotal ({cartItems.reduce((count, product) => count + product.quantity, 0)}{" "}
                item{cartItems.length > 1 ? "s" : ""});
            </p>
            <button className="w-full mt-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md">
            ₹{cartItems.reduce((total, product) => total + product.product_price * product.quantity, 0).toLocaleString()}
            </button>
        </div>
    );
};

export default ShoppingDetails;
