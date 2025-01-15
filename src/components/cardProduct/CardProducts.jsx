import React from 'react'
import CartProduct from "./CardProduct";
import Header1 from "../../assets/Heater1.jpg";
import Header2 from "../../assets/Heater2.jpg";
import Header3 from "../../assets/Heater3.jpg";
import Header4 from "../../assets/Heater4.jpg";
import Header5 from "../../assets/Heater5.jpg";

const CardProducts = () => {
  const products = [
    {
      image: Header1,
      brand: "Havells",
      title:
        "Havells Instantio Prime 25L Storage Water Heater(Geyser)|Color Changing LED Ring Indicator, Feroglas Coated...",
      rating: 4.5,
      reviews: 2655,
      originalPrice: 18200,
      discountedPrice: 7999,
      discountPercentage: 56,
      deliveryDate: "Saturday, January 18",
      bought: "300+",
    },
    {
      image: Header2,
      brand: "Haier",
      title:
        "Haier Aqualad Pro Geyser 25 Litre 5 Star 1-3KW Adjustable Storage Water Geyser |Free Installation&Flexi Pipe...",
      rating: 4,
      reviews: 19,
      originalPrice: 23500,
      discountedPrice: 13070,
      discountPercentage: 44,
      deliveryDate: "Monday, January 20",
    },
    {
      image: Header3,
      brand: "Havells",
      title:
        "Havells Troica 25 Litre Storage Water Heater(Geyser)|Glass Coated Anti Rust Tank|Temperature Setting...",
      rating: 4,
      reviews: 45,
      originalPrice: 14000,
      discountedPrice: 9300,
      discountPercentage: 34,
      deliveryDate: "Saturday, January 18",
    },
    {
      image: Header4,
      brand: "Havells",
      title:
        "Havells Instantio 3L Instant Water Heater(Geyser)| Temp. Sensing LED Indicator| Rust & Shock Proof Body...",
      rating: 4.5,
      reviews: 21865,
      originalPrice: 5850,
      discountedPrice: 3399,
      discountPercentage: 42,
      deliveryDate: "Saturday, January 18",
      bought: "5K+",
    },
    {
      image: Header5,
      brand: "Havells",
      title:
        "Havells Monza Digi 25 Litre 5 Star Vertical Storage Water Heater (White, 2000 Watts)",
      rating: 4,
      reviews: 4,
      originalPrice: 18500,
      discountedPrice: 10750,
      discountPercentage: 42,
      options: 2,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-5 bg-gray-50">
      {products.map((product, index) => (
        <CartProduct key={index} product={product} />
      ))}
    </div>
  )
}

export default CardProducts
