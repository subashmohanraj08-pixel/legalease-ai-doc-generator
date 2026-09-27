import axios from "axios";

const API = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "AQ.Ab8RN6L2elnvso1WZ9uoqwDUyrrCYXJdWUAqlUaMVCnw3ryClA",

  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
