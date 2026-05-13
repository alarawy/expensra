import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    updateUserProfile,
    changeUserPassword,
    requestOTP,
    resetUserPassword,
} from "../../services/user.service.js";

export const USER_QUERY_KEY = ["user"]

export const useForgotPassword = () => {
    return useMutation({
        mutationFn: requestOTP,
    });
};

export const useUpdateUserProfile = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateUserProfile,
        onSuccess: (data) => {
            queryClient.setQueryData(USER_QUERY_KEY, data);
        },
    });
};

export const useChangeUserPassword = () => {
    return useMutation({
        mutationFn: changeUserPassword
    });
};

export const useResetUserPassword = () => {
    return useMutation({
        mutationFn: resetUserPassword,
    });
};