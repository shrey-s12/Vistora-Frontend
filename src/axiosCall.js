import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";
const API_AUTH_URL = "http://localhost:5001/api";

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error(error.response?.data?.message);
    }
}