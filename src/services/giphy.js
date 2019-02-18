import axios from 'axios';

export default axios.create({
  baseURL: 'https://api-demo.dokku.zachdn.com'
});
