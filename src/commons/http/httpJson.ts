import axios, { type AxiosInstance } from "axios";

/**
 * Content-type : Json
 */
export const httpJson: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_FOR_WEB_API,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// request
httpJson.interceptors.request.use((request) => {
  return request;
});

// response
httpJson.interceptors.response.use(
  // success
  (response) => {
    return response;
  },
  // failure
  (error) => {
    const message = `http error:${error.response?.status}`;
    alert(message);
    console.log(message, error.response);

    // .thenを無効化
    return Promise.reject(error);
  }
);
