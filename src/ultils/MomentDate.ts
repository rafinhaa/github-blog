import moment from "moment";

export const momentDate = (date: string) => {
  return moment(date).fromNow();
};
