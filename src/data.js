import Heater1 from "./assets/Heater1.jpg";
import Heater2 from "./assets/Heater2.jpg";
import Header3 from "./assets/Heater3.jpg";
import Header4 from "./assets/Heater4.jpg";
import Header5 from "./assets/Heater5.jpg";

import OrderBox from "./assets/orderBox.png"
import Lock from "./assets/Lock.png"
import PrimeBox from "./assets/Prime.png"
import Location from "./assets/Location.png"
import AmazonBusiness from "./assets/AmazonBusiness.jpg"

export const products = [
    {
        id: 1,
        image: Heater1,
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
        price: 7999,
        inStock: true,
        color: "White",
        size: "25L",
        style: "Vertical",
        quantity: 1,
    },
    {
        id: 2,
        image: Heater2,
        brand: "Haier",
        title:
            "Haier Aqualad Pro Geyser 25 Litre 5 Star 1-3KW Adjustable Storage Water Geyser |Free Installation&Flexi Pipe...",
        rating: 4,
        reviews: 19,
        originalPrice: 23500,
        discountedPrice: 13070,
        discountPercentage: 44,
        deliveryDate: "Monday, January 20",
        price: 13070,
        inStock: true,
        color: "White",
        size: "25L",
        style: "Vertical",
        quantity: 1,
    },
    {
        id: 3,
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
        price: 9300,
        inStock: true,
        color: "White",
        size: "25L",
        style: "Vertical",
        quantity: 1,
    },
    {
        id: 4,
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
        price: 3399,
        inStock: true,
        color: "White",
        size: "3L",
        style: "Compact",
        quantity: 1,
    },
    {
        id: 5,
        image: Header5,
        brand: "Havells",
        title:
            "Havells Monza Digi 25 Litre 5 Star Vertical Storage Water Heater (White, 2000 Watts)",
        rating: 4,
        reviews: 4,
        originalPrice: 18500,
        discountedPrice: 10750,
        discountPercentage: 42,
        deliveryDate: "Saturday, January 18",
        price: 10750,
        inStock: true,
        color: "White",
        size: "25L",
        style: "Vertical",
        quantity: 1,
        options: 2,
    },
];


export const profile_view = [
    {
        id: crypto.randomUUID(),
        img: OrderBox,
        title: "Your Orders",
        description: "Track, return, or buy things again",
    },
    {
        id: crypto.randomUUID(),
        img: Lock,
        title: "Login & Security",
        description: "Edit login, name, and mobile number",
    },
    {
        id: crypto.randomUUID(),
        img: PrimeBox,
        title: "Prime",
        description: "View benefits and payment settings",
    },
    {
        id: crypto.randomUUID(),
        img: Location,
        title: "Your Addresses",
        description: "Edit addresses for orders and gifts",
    },
    {
        id: crypto.randomUUID(),
        img: AmazonBusiness,
        title: "Your business account",
        description: "Sign up for free to save up to 28% with GST invoice and bulk discounts and purchase on credit.",
    }
]