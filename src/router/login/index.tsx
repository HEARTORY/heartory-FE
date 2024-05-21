import React, { useEffect } from "react";
import Mia from "@/assets/images/MASCOTCLEAN-05.png"
import Stars from "@/assets/images/MASCOTCLEAN-04 - Copy.png"
import { LoginForm } from "./components/LoginForm";
import { useNavigate } from "react-router-dom";

interface Props { }

const Login: React.FC<Props> = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("Token");

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  });
  return (
    <div className="container">
      <div className="flex flex-wrap justify-around mt-14">
        <div className="flex flex-wrap justify-around lg:basis-2/3">
          <div className="flex flex-col gap-4 mb-10 lg:basis-1/2">
            <div className="lg:min-h-44 relative">
              <div className="font-bold text-[#38419D] text-5xl mb-4 lg:text-6xl lg:mb-0">
                Login to get your <span className="text-[#EF5DA8]">Heartory</span>
              </div>
              <img src={Stars} alt="" className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0" />
            </div>
            <div className="text-[#38419D] text-2xl font-semibold">
              If you already have an account, you can <span className="text-[#EF5DA8] font-bold">Login Here!</span>
            </div>
          </div>
          <div className="basis-1/2">
            <img src={Mia} alt="" />
          </div>
        </div>
        <div className="lg:basis-1/3">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
