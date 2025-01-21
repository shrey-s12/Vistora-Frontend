import React from "react";

const ShoppingDetails = () => {
    return (
        <div className="p-4 w-[20%] h-[20%] mt-4 bg-white">
            <h2 className="font-semibold text-lg">Order Summary</h2>
            <p className="mt-4">
                Subtotal (2 items):
                <strong> ₹7999</strong>
            </p>
            <button className="w-full mt-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md">
                Proceed to Checkout
            </button>
        </div>
    );
};

export default ShoppingDetails;
