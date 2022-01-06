import axios from "axios";

const BASE_URL = " https://shoppy--shop.herokuapp.com/api";

const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export default publicRequest;
