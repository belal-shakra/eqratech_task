import axios from "axios";


export const get = (uri) => axios.get(`${process.env.REACT_APP_BASE_URL}/${uri}`);
export const post = (uri, data) => axios.post(`${process.env.REACT_APP_BASE_URL}/${uri}`, data);
export const put = (uri, data) => axios.put(`${process.env.REACT_APP_BASE_URL}/${uri}`, data);
export const remove = (uri, data) => axios.get(`${process.env.REACT_APP_BASE_URL}/${uri}`);