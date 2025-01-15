import React from 'react'

const CardProduct = ({ product }) => {
    const {
        image,
        brand,
        title,
        rating,
        reviews,
        originalPrice,
        discountedPrice,
        discountPercentage,
        deliveryDate,
        bought,
        options = 1,
    } = product;
    const formatPrice = (price) => {
        return new Intl.NumberFormat("en-IN", {
            maximumFractionDigits: 0,
        }).format(price);
    };
    return (
        <div className="border border-gray-200 rounded-lg flex flex-col gap-3 bg-white hover:shadow-md transition-shadow">
            <div className="pb-2 border-b border-gray-500">
                <img
                    src={image || "/placeholder.svg"}
                    alt={title}
                    className="w-full mt-2 object-contain max-h-[200px]"
                />
            </div>

            <div className="flex flex-col flex-1 p-2">
                <h1 className="text-sm text-gray-600 m-0">{brand}</h1>
                <h2 className="text-sm mb-2 text-gray-900 m-0 line-clamp-2">{title}</h2>

                <div className="flex items-center gap-1">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                className={`text-base ${index < Math.floor(rating)
                                    ? "text-[#FFA41C]"
                                    : "text-gray-200"
                                    }`}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <span className="text-sm text-[#007185]">
                        {reviews.toLocaleString()}
                    </span>
                </div>

                {/* {bought && (
                    <div className="text-xs text-gray-600">
                        {bought} bought in past month
                    </div>
                )} */}

                <div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-sm text-[#CC0C39]">
                            -{discountPercentage}%
                        </span>
                        <span className="text-2xl font-medium">
                            ₹{formatPrice(discountedPrice)}
                        </span>
                        <sup className="text-xs">00</sup>
                    </div>
                    <div className="text-xs text-gray-600">
                        M.R.P.:{" "}
                        <span className="line-through">₹{formatPrice(originalPrice)}</span>
                    </div>
                </div>

                <div className="text-sm text-gray-600 mb-2">
                    Get it by {deliveryDate}
                    <div className="text-gray-600">FREE Delivery by Amazon</div>
                </div>

                <button
                    className={`w-full py-2 px-3 text-sm rounded-full my-4 text-black
              ${options > 1
                            ? "border border-gray-300 bg-white hover:bg-gray-50"
                            : "bg-[#FFD814] hover:bg-[#F7CA00] border-0"
                        } 
              shadow-sm cursor-pointer transition-colors`}
                >
                    {options > 1 ? "Buying options" : "Add to Cart"}
                </button>
            </div>
        </div>
    )
}

export default CardProduct
