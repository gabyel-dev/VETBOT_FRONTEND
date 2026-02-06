import axios from "axios";

export const api = axios.create({
  /* baseURL: "https://vetbot-ai.onrender.com", */
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});
