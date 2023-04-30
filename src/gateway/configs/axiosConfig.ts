import axios, { AxiosRequestConfig } from 'axios';

import { BASE_API_URL } from './baseApiUrls';

export const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 50000
} as AxiosRequestConfig)
