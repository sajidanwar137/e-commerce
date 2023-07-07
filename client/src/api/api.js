import Axios from "axios";
import { stringify } from "qs";

function createAxios() {
    const axios = Axios.create();

    axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/`;
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.timeout = 2*60*1000;

    axios.interceptors.response.use(
        (response) => response?.data,
        (error) => {
            if (error?.response?.data) return Promise.reject(error.response.data);
            return Promise.reject(error);
        }
    );
    return axios;
}

// Initialise Axios
const api = createAxios();

const service = {
    get(route, query = {}, options = {}) {
        return api.get(`${route}?${query}`, options);
    },
    post(route, payload = {}, options = {}) {
        return api.post(route, payload, options);
    },
    delete(route, payload = {}, options = {}) {
        return api.delete(route, options, payload);
    },
};

export default service;
