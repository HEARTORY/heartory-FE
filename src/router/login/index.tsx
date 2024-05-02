import React from "react";
import Mia from "@/assets/images/MASCOTCLEAN-05.png"
import Stars from "@/assets/images/MASCOTCLEAN-04 - Copy.png"
import { LoginForm } from "./components/LoginForm";

interface Props { }

const Login: React.FC<Props> = () => {
  return (
    <div className="container">
      <div className="flex flex-row mt-14">
        <div className="flex flex-row justify-between basis-2/3">
          <div className="flex flex-col gap-4 basis-1/2">
            <div className="min-h-44 relative">
              <div className="font-bold text-[#38419D] text-6xl">
                Login to get your <span className="text-[#EF5DA8]">Heartory</span>
              </div>
              <img src={Stars} alt="" className="absolute bottom-0 right-0" />
            </div>
            <div className="text-[#38419D] text-2xl font-semibold">
              If you already have an account, you can <span className="text-[#EF5DA8] font-bold">Login Here!</span>
            </div>
          </div>
          <div className="basis-1/2">
            <img src={Mia} alt="" />
          </div>
        </div>
        <div className="basis-1/3">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
