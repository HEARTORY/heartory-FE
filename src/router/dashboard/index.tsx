import React, { useEffect, useState } from "react";
import { Tabs } from "@/components/ui/Tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/Card";
import { Overview } from "./components/overview";
import { RecentSales } from "./components/recent-sales";
// import { dashboardApi } from "@/utils/api/dashboardApi";
import Loading from "@/components/PublicComponents/Loading";
import YearSelect from "./components/YearSelect";
// import { getSubscriptionsPaging } from "./usecase/getSubscriptionsPaging";
import { MdOutlineRequestQuote } from "react-icons/md";
import { BsChatQuote } from "react-icons/bs";

interface Props {
    // define your props here
}
const Dashboard: React.FC<Props> = () => {
    const [subscriptions, setSubscriptions] = useState<any[]>([]);
    // const [loading, setLoading] = useState(true);
    const [searchField,] = useState("status");
    const [searchValue,] = useState("signed");
    const [sortField,] = useState("signedAt");
    const [descending,] = useState(true);
    const [, setTotalPages] = useState(2);
    const [, setTotalItems] = useState(2);
    const [pageSize,] = useState(5);
    const [pageIndex,] = useState(1);

    // const [data, setData] = useState(null);
    const transformedData = [
        {
            name: "Jan",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Feb",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Mar",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Apr",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "May",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Jun",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Jul",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Aug",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Sep",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Oct",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Nov",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Dec",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
    ];

    const data = transformedData.map((item, index) => ({
        monthAsNumber: index + 1,
        monthAsString: item.name,
        revenue: item.total,
    }));
    const [totalRevenue, setTotalRevenue] = useState(100);
    // const [newUser, setNewUser] = useState(0);
    const [transaction, setTransaction] = useState(100);
    const [subscription, setSubscription] = useState(100);
    const [selectedYear, setSelectedYear] = useState("2024");
    async function getSubscriptionsService(
        searchField: string,
        searchValue: string,
        sortField: string,
        descending: boolean,
        pageSize: number,
        pageIndex: number
    ) {
        // const res = await getSubscriptionsPaging(
        //     searchField,
        //     searchValue,
        //     sortField,
        //     descending,
        //     pageSize,
        //     pageIndex
        // );
        // if (res) {
        //     // setLoading(false);
        //     setSubscriptions(res.subscriptionsItems);
        //     setTotalPages(res.lastPage);
        //     setTotalItems(res.total);
        // }
        // console.log(res?.subscriptionsItems);

    }
    useEffect(() => {
        const fetchData = async () => {
            // setData(null);
            // const token = `Bearer ${localStorage.getItem("Token")}`;
            // const res = await dashboardApi.getDashboard(
            //     token as string,
            //     selectedYear
            // );
            // setSelectedYear(selectedYear);
            // // setNewUser(res.data.data.newUsersCount);
            // setTotalRevenue(res.data.data.totalRevenue);
            // setData(res.data.data.revenueByMonths);
            // setSubscription(res.data.data.subscriptionsCount);
            // setTransaction(res.data.data.transactionsCount);
        };
        // fetchData();
        getSubscriptionsService(
            searchField,
            searchValue,
            sortField,
            descending,
            pageSize,
            pageIndex
        );
    }, [selectedYear]);
    return (
        <>
            <div className="hidden flex-col md:flex">
                {/* <div className="border-b">
                    <div className="flex h-16 items-center px-4">
                        <div className="ml-auto flex items-center space-x-4">
                            <Search />
                            <UserNav />
                        </div>
                    </div>
                </div> */}
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center gap-x-7 space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">
                            Dashboard
                        </h2>
                        <div className="flex items-center space-x-2">
                            <YearSelect
                                setSelectedYear={setSelectedYear}
                                selectedYear={selectedYear}
                            />
                        </div>
                    </div>
                    {/* {data && ( */}
                    <Tabs defaultValue="overview" className="space-y-4">
                        <TabsContent value="overview" className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                <Card className="border">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Total Revenue
                                        </CardTitle>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="h-4 w-4 text-muted-foreground"
                                        >
                                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                        </svg>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">
                                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'VND' }).format(totalRevenue)}
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            The Total Revenue of {selectedYear}
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className="border">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Total Transaction
                                        </CardTitle>
                                        {/* <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="h-4 w-4 text-muted-foreground"
                                            >
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                                <circle cx="9" cy="7" r="4" />
                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                            </svg> */}
                                        <BsChatQuote className="h-4 w-4 text-muted-foreground" />

                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">
                                            +{transaction}
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            The Total transaction of {selectedYear}
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className="border">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Total Subscription
                                        </CardTitle>
                                        {/* <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="h-4 w-4 text-muted-foreground"
                                            >
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                                <circle cx="9" cy="7" r="4" />
                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                            </svg> */}
                                        <MdOutlineRequestQuote className="h-4 w-4 text-muted-foreground" />

                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">
                                            +{subscription}
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            The Total subscription signed in {selectedYear}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                                <Card className="col-span-4 border">
                                    <CardHeader>
                                        <CardTitle>Overview</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pl-2">
                                        <Overview data={data} />
                                    </CardContent>
                                </Card>
                                <Card className="col-span-3 border">
                                    <CardHeader>
                                        <CardTitle>Recent Subscriptions</CardTitle>
                                        <CardDescription>
                                            The Recent {pageSize} Subscriptions
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <RecentSales subscriptions={subscriptions} />
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    </Tabs>
                    {/* )} */}
                </div>
            </div>
            {/* {!data && <Loading />} */}
        </>
    );
};

export default Dashboard;
