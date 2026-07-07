import { useQuery } from "@tanstack/react-query";
import { upgradePlan } from "../../services/upgradePlan.service";

export const useUpgradePlan = () => {
  return useQuery({
    queryKey: ["upgrade-plan"],
    queryFn: upgradePlan,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
};
