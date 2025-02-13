import axios from "axios";

export const baseApi = axios.create({
    baseURL: 'https://express-service-dun.vercel.app',
});