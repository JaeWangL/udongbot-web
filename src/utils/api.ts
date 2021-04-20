import Axios, { AxiosInstance } from 'axios';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({ maxAge: 15 * 60 * 100, exclude: { query: false } });
const noCache = setupCache({ maxAge: 0 });

export const createAxiosInstance = (path: string, disableCache = true): AxiosInstance => {
  if (!process.env.API_URL) {
    throw new Error('api.createAxiosInstance: env `API_URL` not found');
  }

  return Axios.create({
    baseURL: process.env.API_URL + path,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 9000,
    adapter: disableCache ? noCache.adapter : cache.adapter,
  });
};
