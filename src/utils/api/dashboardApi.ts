import { get } from "./ApiCaller";

export const dashboardApi = {
    getDashboard: (token: string, startDate: string, endDate: string) => {
        return get(
            `/dashboard/total?startDate=${startDate}&endDate=${endDate}`,
            {},
            { Authorization: token }
        );
    },
};