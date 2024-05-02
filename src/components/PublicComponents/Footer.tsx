import React from "react";
import logo15 from "@/assets/images/logo-15.png";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";

const items = [
    {
        icon: FaEnvelope,
        text: "heartory.inc@gmail.com",
    },
    {
        icon: FaPhoneAlt,
        text: "(+84) 901-273-457",
    },
    {
        icon: FaMapMarkerAlt,
        text: "S102 Nguyen Xien St., HCMC 1000",
    },
];

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-white">
            <div className="container mb-20">
                <div className="flex flex-wrap justify-between py-16 border-b-2 mb-5">
                    <div className="flex flex-col gap-4">
                        <div className="w-40 mx-7">
                            <Link
                                to={"/"}
                            >
                                <img
                                    className=""
                                    src={logo15}
                                    alt={"logo"}
                                />
                            </Link>
                        </div>
                        <div className="flex flex-row justify-center">
                            <div className="text-[#38419D] mx-2">
                                <FaFacebook />
                            </div>
                            <div className="text-[#38419D] mx-2">
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="font-bold text-[#38419D] text-xl">
                            Product
                        </div>
                        <div className="text-[#8A8585]">
                            <div className="flex flex-col gap-1 text-[#8A8585]">
                                Features
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="font-bold text-[#38419D] text-xl">
                            Company
                        </div>
                        <div className="flex flex-col gap-1 text-[#8A8585]">
                            <div>
                                About
                            </div>
                            <div>
                                Contact Us
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="font-bold text-[#38419D] text-xl">
                            Contact Us
                        </div>
                        <div className="flex flex-col gap-1 text-[#8A8585]">
                            {items.map((item: any, idx: number) => (
                                <div key={idx} className="flex gap-1">
                                    <div className="text-blue-400 my-auto">
                                        <item.icon classname=""></item.icon>
                                    </div>
                                    <div className="my-auto">{item.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between text-[#8A8585]">
                    <div>Copyright © 2024</div>
                    <div>All Rights Reserved | Terms and Conditions | Privacy Policy</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;