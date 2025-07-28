import axios, { type AxiosInstance } from "axios";
import { API_URL } from "../constants/api";

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
})

export default api;
