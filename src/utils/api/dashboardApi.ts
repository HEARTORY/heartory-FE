import { get } from "./ApiCaller";

export const dashboardApi = {
  getDashboard: (
    token: string
    // , startDate: string, endDate: string
  ) => {
    return get(
      `/dashboard/totals?startDate=2024-05-01T00%3A00%3A00Z&endDate=2024-06-07T23%3A59%3A59Z`,
      // `/dashboard/total?startDate=${startDate}&endDate=${endDate}`,
      {},
      { Authorization: token }
    );
  },
};
