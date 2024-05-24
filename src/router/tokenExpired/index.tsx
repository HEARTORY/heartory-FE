import React from "react";
import Unauthorized from "@/assets/images/MASCOTCLEAN-03.png";
interface Props {
    // define your props here
}

const ErrorTokenPage: React.FC<Props> = () => {
    return (
        <div className="flex items-center justify-center flex-col ">
            <img src={Unauthorized} className="w-[30%]" />
            <h1 className="text-sm sm:text-2xl w-[70%] text-center m-4 text-[#38419D]">
                Sorry, this request was expired or your password was reset already.
            </h1>
        </div>
    );
};

export default ErrorTokenPage;
