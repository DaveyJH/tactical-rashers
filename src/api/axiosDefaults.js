import axios from "axios";

axios.defaults.baseURL = "https://tactical-rashers-api-50ab26b13e4f.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
