import axios from "axios";

export const api = axios.create({
  baseURL: "https://vetbot-ai.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
