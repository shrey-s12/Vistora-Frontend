import axios from "axios";

const API_BASE_URL = "https://vistora-backend.onrender.com/api";
const API_AUTH_URL = "https://vistora-backend-auth.onrender.com/auth";

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error(error.response?.data?.message);
    }
}