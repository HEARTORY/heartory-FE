import React from "react";
import PaySuccess from "@/assets/images/MASCOTCLEAN-05.png";
interface Props {
    // define your props here
}

const PaymentSuccess: React.FC<Props> = () => {
    return (
        <div className="flex items-center justify-center flex-col ">
            <h1 className="text-sm sm:text-2xl w-[70%] text-center m-4 text-green-600 mb-10 font-semibold">
                Congratulations, your Payment was successful.
            </h1>
            <img src={PaySuccess} className="w-[30%]" />
        </div>
    );
};

export default PaymentSuccess;
