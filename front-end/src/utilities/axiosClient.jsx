import axios from "axios";

// creating the axios client
const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        "Content-Type": "application/json",
    },
    responseType: "json",
});

// creating the axios interceptors
axiosClient.interceptors.request.use(
    (config) => {
        console.log(`config:${config}`);
        const token = localStorage.getItem("ACCESS_TOKEN");
        config.headers.Authorization = `Bearer ${token}`;
        /* this the config that is used each time when sending a request
        For each request we need to associate it the the token */
        return config;
    },
    (error) => Promise.reject(error)
);
axiosClient.interceptors.response.use(
    (res) => res,
    (error) => {
        let { response } = error;
        if (response && response.status === 401) {
            // unauthorized so basically the provided token is not valid and henece we remove it
            localStorage.removeItem("ACCESS_TOKEN");
            // here we need to update the context if necessary
        }
        throw error;
    }
);
export { axiosClient };
