import React from "react";
import Unauthorized from "@/assets/images/MASCOTCLEAN-03.png";
interface Props {
    // define your props here
}

const PaymentCancel: React.FC<Props> = () => {
    return (
        <div className="flex h-screen sm:h-auto items-center sm:justify-center flex-col sm:flex-col-reverse">
            <h1 className="mt-24 sm:mt-4 text-base sm:text-2xl w-[70%] text-center m-4 text-[#38419D] font-medium">
                Sorry, the Payment has been <span className="text-[#EF5DA8]">cancelled.</span>
            </h1>
            <img src={Unauthorized} className="w-[82%] sm:w-[30%]" />
        </div>
    );
};

export default PaymentCancel;
