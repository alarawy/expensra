import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    loginUser,
    signupUser,
    logoutUser,
    getCurrentUser,
} from "../../services/auth.service.js";



export const AUTH_QUERY_KEYS = {
    currentUser: ["auth", "currentUser"],
};

export const useLoginUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            if (data?.token) {
                localStorage.setItem("token", data.token);
            }

            // خزّن اليوزر في الكاش
            queryClient.setQueryData(
                AUTH_QUERY_KEYS.currentUser,
                data.user
            );
        },
    });
};


export const useSignupUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: signupUser,
        onSuccess: (data) => {
            if (data?.token) {
                localStorage.setItem("token", data.token);
            }

            queryClient.setQueryData(
                AUTH_QUERY_KEYS.currentUser,
                data.user
            );
        },
    });
};


export const useLogoutUser = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: logoutUser,
        onSuccess: () => {
            localStorage.removeItem("token");

            queryClient.removeQueries({
                queryKey: AUTH_QUERY_KEYS.currentUser,
            });
        },
    });
};


export const useGetCurrentUser = () => {
    return useQuery({
        queryKey: AUTH_QUERY_KEYS.currentUser,
        queryFn: getCurrentUser,
        retry: false,
        staleTime: 5 * 60 * 1000, // 5 دقائق
    });
};