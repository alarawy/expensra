import { useQuery } from "@tanstack/react-query"
import { getAllCategories } from "../../services/categories.service"

export const useAllCategories = ()=> {
    return useQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories,
        staleTime: 5 * 60 * 1000,
        retry: false,
    })
}
