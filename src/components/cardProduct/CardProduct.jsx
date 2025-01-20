import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, changeQuantity } from '../../slices/cartSlice';

const CardProduct = ({ product }) => {
    const id = product._id;
    console.log("id", id)
    const quantity = useSelector(state => state.cart.items.find(item => item._id === id)?.quantity);
    console.log("Quantity", quantity)
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        console.log("product", product);
        dispatch(addItem(product));
    };

    const handleDecrement = () => {
        dispatch(changeQuantity({ id, increament: -1 }));
    };
    const handleIncrement = () => {
        dispatch(changeQuantity({ id, increament: 1 }));
    };

    return (
        <div className="border border-gray-200 rounded-lg flex flex-col gap-3 bg-white hover:shadow-md transition-shadow">
            <div className="pb-2 border-b border-gray-500">
                <img
                    src={product.product_image || "/placeholder.svg"}
                    alt={product.product_brand}
                    className="w-full mt-2 object-contain max-h-[200px]"
                />
            </div>

            <div className="flex flex-col flex-1 p-2">
                <h1 className="text-sm text-gray-600 m-0">{product.product_brand}</h1>
                <h2 className="text-sm mb-2 text-gray-900 m-0 line-clamp-2">{product.product_title}</h2>

                <div className="flex items-center gap-1">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                className={`text-base ${index < Math.floor(product.product_rating)
                                    ? "text-[#FFA41C]"
                                    : "text-gray-200"
                                    }`}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <span className="text-sm text-[#007185]">
                        {product.product_reviews}
                    </span>
                </div>
                <div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-sm text-[#CC0C39]">
                            -{product.product_discountPercentage}%
                        </span>
                        <span className="text-2xl font-medium">
                            ₹{product.product_discountedPrice}
                        </span>
                        <sup className="text-xs">00</sup>
                    </div>
                    <div className="text-xs text-gray-600">
                        M.R.P.:{" "}
                        <span className="line-through">₹{product.product_originalPrice}</span>
                    </div>
                </div>

                <div className="text-sm text-gray-600 mb-2">
                    Get it by {product.product_deliveryDate}
                    <div className="text-gray-600">FREE Delivery by Vistora</div>
                </div>

                {
                    quantity
                        ? (<div className='flex justify-center py-2 px-3 my-4'>
                            <button
                                className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-black"
                                onClick={handleDecrement}
                            >
                                -
                            </button>
                            <span className="px-4 text-black">{quantity}</span>
                            <button
                                className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-black"
                                onClick={handleIncrement}
                            >
                                +
                            </button>
                        </div>)
                        : (<button
                            onClick={handleAddToCart}
                            className={`w-full py-2 px-3 text-sm rounded-full my-4 text-black bg-[#FFD814] hover:bg-[#F7CA00] border-0 shadow-sm cursor-pointer transition-colors`}
                        >
                            Add to Cart
                        </button>)
                }
            </div>
        </div >
    )
}

export default CardProduct
