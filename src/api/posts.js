import axios from './axios';

export const getPosts = async () => axios({
  method: 'GET',
  url: 'posts',
});
