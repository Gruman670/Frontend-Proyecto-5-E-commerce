import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://backend-ecommerce-c9-aquaride.onrender.com"
})

export default axiosClient;