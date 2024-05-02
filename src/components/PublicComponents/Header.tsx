import React from "react";
import logo16 from "@/assets/images/logo-16.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

const navLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/" },
];

const Header: React.FC = () => {
    return (
        <header className="w-full py-5">
            <div className="container flex justify-between text-[#38419D] text-xl">
                <div className="w-52">
                    <Link
                        to={"/"}
                    >
                        <img
                            className=""
                            src={logo16}
                            alt={"logo"}
                        />
                    </Link>
                </div>
                <div className="my-auto hidden sm:block">
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
                <div className="my-auto flex flex-row justify-end">
                    <div
                        className="hover:underline font-medium my-auto text-lg mr-5"
                    >
                        <Link
                            to={"/login"}
                        >
                            Login
                        </Link>
                    </div>
                    <Link
                        to={"/login"}
                    >
                        <Button
                            className="p-5"
                            variant={"blueCustom"}>
                            Sign up
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;