import axios from 'axios';

export const getListOfAgesOfUsersWith = (data) => {
  console.log(data);
  return axios({
    method: 'get',
    url: `/users/age/${data.item}`,
  });
};
export const getUsers = () => axios.get('/users');
export const healthCheck = () => axios.get('/healthcheck');
