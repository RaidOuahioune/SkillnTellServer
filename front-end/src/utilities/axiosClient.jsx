import axios from "axios";
import { useUserContext } from "../contexts/UserContextProvider";

// creating the axios client
const axiosClient = axios.create({
    baseURL: "https://painstaking-agreement-production.up.railway.app/api/",
    headers: {
        "Content-Type": "application/json",
    },
    responseType: "json",
});

// creating the axios interceptors
axiosClient.interceptors.request.use(
    (config) => {
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
            let { setUser } = useUserContext();
            setUser(null);
        }
        console.log(error);
        throw error;
    }
);
export { axiosClient };
