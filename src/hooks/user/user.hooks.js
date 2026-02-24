import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    getUserProfile,
    updateUserProfile,
    changeUserPassword,
} from "../../services/user.service.js";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";


export const USER_QUERY_KEYS = {
    profile: ["user", "profile"],
};


export const useGetUserProfile = () => {
    return useQuery({
        queryKey: USER_QUERY_KEYS.profile,
        queryFn: getUserProfile,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};

export const useUpdateUserProfile = () => {
    const queryClient = useQueryClient();
    const { t } = useTranslation();

    return useMutation({
        mutationFn: updateUserProfile,
        onSuccess: (data) => {
            queryClient.setQueryData(USER_QUERY_KEYS.profile, data);
            toast.success(t("auth.profileUpdated"));
            // ولو عندك auth user cached
            queryClient.invalidateQueries({
                queryKey: ["auth", "currentUser"],
            });
        },
    });
};


export const useChangeUserPassword = () => {
    const { t } = useTranslation();
    return useMutation({
        mutationFn: changeUserPassword,
        onSuccess: () => {
            toast.success(t("auth.passwordChanged"));
        },
    });
};