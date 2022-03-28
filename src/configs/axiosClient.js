import axios from "axios";

const BaseUrl = 'https://swapi.dev/api/';

const axiosClient = axios.create({
  baseURL: BaseUrl,
  timeout: 25000,
  signal: new AbortController().signal,
});
;

export default axiosClient;