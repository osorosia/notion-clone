import axios from 'axios';

const instance = axios.create({
  baseURL: "http://back:8080/api"
});

export default instance;
