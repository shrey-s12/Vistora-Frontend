import Heater1 from "./assets/Heater1.jpg";
import Heater2 from "./assets/Heater2.jpg";

import OrderBox from "./assets/orderBox.png"
import Lock from "./assets/Lock.png"
import PrimeBox from "./assets/Prime.png"
import Location from "./assets/Location.png"
import AmazonBusiness from "./assets/AmazonBusiness.jpg"


export const products = [
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
]

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