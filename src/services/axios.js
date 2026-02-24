import axios from "axios";

const api = axios.create({
    baseURL: "https://your-api-url.com/api", // 👈 غير دي بس
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // لو بتستخدم cookies (اختياري)
});

/* =============================== Request Interceptor =============================== */
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

/* =============================== Response Interceptor =============================== */
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Server response موجود
        if (error.response) {
            const message =
                error.response.data?.message ||
                error.response.data?.error ||
                "Request failed";

            return Promise.reject(message);
        }

        // Network error
        if (error.request) {
            return Promise.reject("Network error, please try again");
        }

        // Any other error
        return Promise.reject("Something went wrong");
    }
);

export default api;