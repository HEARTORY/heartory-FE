import React from "react";
import PaySuccess from "@/assets/images/MASCOTCLEAN-05.png";
interface Props {
    // define your props here
}

const PaymentSuccess: React.FC<Props> = () => {
    return (
        <div className="flex h-screen sm:h-auto items-center sm:justify-center flex-col sm:flex-col">
            <h1 className="mt-24 sm:mt-4 mb-5 sm:mb-9 text-base sm:text-2xl w-[70%] text-center m-4 text-green-600 font-semibold">
                Congratulations, your Payment was successful.
            </h1>
            <img src={PaySuccess} className="mt-4 sm:mt-0 w-[78%] sm:w-[30%]" />
        </div>
    );
};

export default PaymentSuccess;
