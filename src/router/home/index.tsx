import React from "react";

import Introduction from "./components/Introduction";

import AppInfo from "./components/AppInfo";
import Features from "./components/Features";
import { InterfaceLook } from "./components/InterfaceLook";
import Howto from "./components/Howto";

interface Props {}

const Home: React.FC<Props> = () => {
    return (
        <div className="container mt-2 p-0 sm:pr-8 sm:pl-8">
            <Introduction />
            <AppInfo />
            <Features />
            <InterfaceLook />
            <Howto />
        </div>
    );
};

export default Home;
