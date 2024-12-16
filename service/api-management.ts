import axios from "axios";
import Router from "next/router";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_JAVA,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
  timeout: 1000000,
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      Router.push("/401");
    } else if (status === 404) {
      Router.push("/404");
    } else if (status === 500) {
      Router.push("/500");
    } else if (status === 401) {
      Router.push("/401");
    }

    return Promise.reject(error);
  }
);
