import { format } from "date-fns";
import { ar, enUS } from "date-fns/locale";

export const formatDateRange = (startDate, endDate, language) => {
  const locale = language === "ar" ? ar : enUS;

  return `${format(startDate, "d MMM", { locale })} - ${format(
    endDate,
    "d MMM",
    { locale }
  )}`;
};