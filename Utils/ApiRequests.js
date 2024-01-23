import axios from 'axios';

const token = 'test';

const publicRequest = axios.create({
  baseURl: 'https://darbi-pxgsw.ondigitalocean.app/docs/',
});

const userRequest = axios.create({
  baseURl: 'https://darbi-pxgsw.ondigitalocean.app/docs/',
  headers: { Authorization: `Bearer ${token}` },
});

export { publicRequest, userRequest };
