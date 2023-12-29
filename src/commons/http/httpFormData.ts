import axios, { type AxiosInstance } from "axios";

/**
 * Content-type : FormData
 */
export const httpFormData: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_FOR_WEB_API,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});

// request
httpFormData.interceptors.request.use((request) => {
  return request;
});

// response
httpFormData.interceptors.response.use(
  // success
  (response) => {
    return response;
  },
  // failure
  (error) => {
    const message = `http error:${error.response?.status}`;
    alert(message);
    console.log(message, error.response);

    //.thenを無効化
    return Promise.reject(error);
  }
);
