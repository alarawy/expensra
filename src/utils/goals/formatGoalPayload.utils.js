import formatDate from "../formats/formatDate";

export const formatGoalPayload = (data) => ({
  ...data,
  deadline: formatDate(data.deadline),
});