import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const PublicLayout: React.FC = () => {
    return (
        <div className="flex flex-col w-full min-h-screen items-center bg-[#FBF9FF]">
            <Header />
            <div className="flex flex-1 w-full">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default PublicLayout;