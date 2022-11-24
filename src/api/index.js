import axios from "axios";

// const URL = "https://app4-backend.herokuapp.com";
const URL = 'https://blog-backend-gray.vercel.app'

export default axios.create({
  baseURL: URL,
});
