import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-cp-3e93c/us-central1/api", //api url(cloud function)
});

export default instance;
