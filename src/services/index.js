import {api} from './ApiService';

export const getEvents = () => {
  return api.request({
    method: 'GET',
    url: '/allEvents',
  });
};
