import axios from 'axios';

export default function getPosts() {
  return axios.get('/api/blog/posts').then(({ data }) => data);
}
