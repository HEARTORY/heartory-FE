import React from "react";
import logo16 from "@/assets/images/logo-16.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "@/router/login/slice";
import selector from "@/router/login/slice/selector";


const navLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/" },
];

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const tokenLS = localStorage.getItem("Token");
    if (tokenLS) {
        dispatch(actions.setToken(tokenLS as never));
    }
    const token: any = useSelector(selector.token);

    const handleLogout = () => {
        localStorage.removeItem("Token");
        dispatch(actions.setToken("" as never));
    };

    return (
        <header className="w-full py-5 max-w-[85%]">
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
                                >
                                    {link.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="my-auto flex flex-row justify-end min-w-40">
                    {token && token != "" ? (
                        <div
                            className="hover:underline font-medium my-auto text-lg mr-5"
                        >
                            <Link
                                to={"/login"}
                                onClick={handleLogout}
                            >
                                <Button
                                    className="p-5"
                                    variant={"blueCustom"}>
                                    Logout
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <Link
                            to={"/login"}
                        >
                            <Button
                                className="p-5 hidden"
                                variant={"blueCustom"}>
                                Login as Admin
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;