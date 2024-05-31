import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Demo from "./demo";
import PublicRoute from "./PublicRoute";
import PublicLayout from "@/components/PublicComponents/PublicLayout";
import Home from "./home";
import Login from "./login";
import PasswordReset from "./forgetPassword";
import NotFound from "./404";
import Error403Page from "./403";
import ErrorTokenPage from "./tokenExpired";
import PaymentCancel from "./paymentCancel";
import PaymentSuccess from "./paymentSuccess";
import AdminRoute from "./AdminRoute";
import Dashboard from "./dashboard";
import AdminLayout from "@/components/AdminComponents/AdminLayout";

const RouterComponent: React.FC = () => {
    const hiddenRoute = [
        {
            index: true,
            path: "passwordReset/:resetToken",
            component: <PasswordReset />,
            exact: true,
            restrict: true,
        },
        {
            index: true,
            path: "404",
            component: <NotFound />,
            exact: true,
            restrict: true,
        },
    ];
    const adminRoute = [
        {
            index: true,
            path: "admin/dashboard",
            component: <Dashboard />,
            exact: true,
            restrict: true,
        },
    ];
    const publicRoute = [
        {
            index: true,
            path: "home",
            component: <Home />,
            exact: true,
            restrict: true,
        },
        {
            index: true,
            path: "login",
            component: <Login />,
            exact: true,
            restrict: true,
        },
        {
            index: true,
            path: "demo",
            component: <Demo />,
            exact: true,
            restrict: true,
        },
        {
            index: true,
            path: "/resetNotAccepted",
            component: <ErrorTokenPage />,
            exact: true,
            restrict: true,
        },
        {
            index: true,
            path: "/payment/success",
            component: <PaymentSuccess />,
            exact: true,
            restrict: true,
        },
        {
            index: true,
            path: "/payment/cancel",
            component: <PaymentCancel />,
            exact: true,
            restrict: true,
        },
        {
            index: true,
            path: "403",
            component: <Error403Page />,
            exact: true,
            restrict: true,
        },
    ];
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="home" />} />
                <Route path="/" element={<PublicRoute />}>
                    <Route element={<PublicLayout />}>
                        <Route>
                            {publicRoute.map((route) => (
                                <Route
                                    index={route.index}
                                    key={route.path}
                                    path={route.path}
                                    element={route.component}
                                />
                            ))}
                        </Route>
                    </Route>
                </Route>
                <Route path="/" element={<PublicRoute />}>
                    <Route>
                        {hiddenRoute.map((route) => (
                            <Route
                                index={route.index}
                                key={route.path}
                                path={route.path}
                                element={route.component}
                            />
                        ))}
                    </Route>
                </Route>
                <Route element={<AdminRoute />}>
                    <Route
                        element={<AdminLayout />}
                    >
                        {adminRoute.map((route) => (
                            <Route
                                index={route.index}
                                key={route.path}
                                path={route.path}
                                element={route.component}
                            />
                        ))}
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterComponent;
