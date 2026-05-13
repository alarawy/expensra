import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    loginUser,
    signupUser,
    logoutUser,
    getCurrentUser,
    verifyUser,
} from "../../services/auth.service.js";



export const AUTH_QUERY_KEY = ["user"]

export const useLoginUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            if (data?.access_token) {
                localStorage.setItem("token", data.access_token);
            }

            queryClient.setQueryData(
                AUTH_QUERY_KEY,
                data.user
            );
        },
    });
};

export const useVerifyUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: verifyUser,
        onSuccess: (data) => {
            if (!data) return;

            if (data?.access_token) {
                localStorage.setItem("token", data.access_token);
            }

            if (data?.user) {
                queryClient.setQueryData(
                    AUTH_QUERY_KEY,
                    data.user
                );
            }

            queryClient.invalidateQueries({
                queryKey: AUTH_QUERY_KEY,
            });
        },
    });
};

export const useSignupUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: signupUser,
        onSuccess: (data) => {
            if (data?.access_token) {
                localStorage.setItem("token", data.access_token);
            }

            queryClient.setQueryData(
                AUTH_QUERY_KEY,
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
            queryClient.clear();
        },
    });
};


export const useGetCurrentUser = () => {
    return useQuery({
        queryKey: AUTH_QUERY_KEY,
        queryFn: getCurrentUser,
        retry: false,
        staleTime: 5 * 60 * 1000,
    });
};