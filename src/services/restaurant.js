import axiosInstance from './axiosInstance';

export const fetchRestaurantData = (location, categories) => {
  return axiosInstance
    .get('/businesses/search', {
      params: {
        location,
        categories,
      },
    })
    .then(response => response.data)
    .then(response => ({ response }))
    .catch(error => ({ error }));
};
