import axios from 'axios';

export default function getRatingTopPeoples() {
  return axios.get('/api/peoples/recommended').then(({ data }) => data);
}
