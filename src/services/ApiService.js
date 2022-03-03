import axios from 'axios';

export const api = axios.create({
  baseURL:
    'https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyDeveloperTest1',
  responseType: 'json',
});

api.interceptors.request.use(config => {
  const accessToken = '786785e9-1b74-430a-80d9-aae49678954f';
  if (!accessToken) {
    return config;
  }

  const Authorization = `Bearer ${accessToken}`;

  return {
    ...config,
    headers: {...config.headers, Authorization},
  };
});
