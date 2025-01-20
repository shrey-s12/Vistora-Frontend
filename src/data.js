import OrderBox from "./assets/orderBox.png"
import Lock from "./assets/Lock.png"
import PrimeBox from "./assets/Prime.png"
import Location from "./assets/Location.png"
import AmazonBusiness from "./assets/AmazonBusiness.jpg"
import PaymentOption from "./assets/PaymentOption.png"
import AmazonPayBalance from "./assets/Amazon_Pay_Balance.png"
import ContactUs from "./assets/Contact_Us.png"

export const headerProducts = [
    { id: 1, name: "Fresh", link: "#" },
    { id: 2, name: "MX Player", link: "#" },
    { id: 3, name: "Sell", link: "#" },
    { id: 4, name: "Vistora Pay", link: "#" },
    { id: 5, name: "Gift Cards", link: "#" },
    { id: 6, name: "Buy Again", link: "#" },
    { id: 7, name: "VistoraBasics", link: "#" },
    { id: 8, name: "Gift Ideas", link: "#" },
    { id: 9, name: "Today's Deals", link: "#" },
    { id: 10, name: "Customer Service", link: "#" }
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
    },
    {
        id: crypto.randomUUID(),
        img: PaymentOption,
        title: "Payment options",
        description: "Edit or add payment methods",
    },
    {
        id: crypto.randomUUID(),
        img: AmazonPayBalance,
        title: "Vistora Pay balance",
        description: "Add money to your balance",
    },
    {
        id: crypto.randomUUID(),
        img: ContactUs,
        title: "Contact Us",
        description: "Contact our customer service via phone or chat",
    }
];