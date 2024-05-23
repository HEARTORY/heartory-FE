import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Demo from "./demo";
import PublicRoute from "./PublicRoute";
import PublicLayout from "@/components/PublicComponents/PublicLayout";
import Home from "./home";
import Login from "./login";
import PasswordReset from "./forgetPassword";

const RouterComponent: React.FC = () => {
    const hiddenRoute = [
        {
            index: true,
            path: "passwordReset/:resetToken",
            component: <PasswordReset />,
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
                {/* <Route path="/payment/result" element={<Payment />} />

                <Route path="/404" element={<ErrorPage />} />
                <Route path="/403" element={<Error403Page />} />
                <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default RouterComponent;
