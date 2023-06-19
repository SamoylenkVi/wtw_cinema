import axios, {AxiosInstance} from 'axios';

const BASE_URL = 'http://localhost:8080/api';

export const createApi = (): AxiosInstance => {
  const api = axios.create( {
    baseURL: BASE_URL,
    timeout: 5000,
  });

  return api;
};
