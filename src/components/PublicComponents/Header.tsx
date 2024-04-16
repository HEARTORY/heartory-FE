import React from "react";
import logo16 from "@/assets/images/logo-16.png";
import { Link } from "react-router-dom";

const navLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/" },
];

const Header: React.FC = () => {
    return (
        <header className="w-full py-5">
            <div className="container flex justify-between text-[#38419D] text-xl">
                <img
                    className="w-[15%]"
                    src={logo16}
                    alt={"logo"}
                />
                <div className="my-auto">
                    <div className="flex flex-row gap-5">
                        {navLinks.map((link, index) => (
                            <div
                                key={index}
                                className="hover:text-[#EF5DA8] hover:underline font-semibold"
                            >
                                <Link
                                    key={index}
                                    to={link.href}
                                // onClick={handleCloseMenu}
                                >
                                    {link.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="my-auto">
                    Login
                </div>
            </div>
        </header>
    );
};

export default Header;