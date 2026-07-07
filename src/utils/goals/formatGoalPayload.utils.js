import { formatDate } from "../index";

export const formatGoalPayload = (data) => ({
  ...data,
  deadline: formatDate(data.deadline),
});
