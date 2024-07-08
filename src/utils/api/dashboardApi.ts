import { get } from "./ApiCaller";

export const dashboardApi = {
  getDashboard: (token: string, startDate: string, endDate: string) => {
    return get(
      `/dashboard/totals?startDate=${startDate}T00%3A00%3A00Z&endDate=${endDate}T23%3A59%3A59Z`,
      {},
      { Authorization: token }
    );
  },
};
