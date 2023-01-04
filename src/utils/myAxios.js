import axios from "axios";

export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://admin.ula.com.bd/api/"
    : "https://admin.ula.com.bd/api/";

const myAxios = axios.create({ baseURL });

// Add a request interceptor
myAxios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
myAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  }
);

export default myAxios;
