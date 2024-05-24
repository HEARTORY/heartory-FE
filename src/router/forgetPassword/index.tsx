import React, { useEffect, useState } from "react";
import Mia from "@/assets/images/MASCOTCLEAN-05.png"
import Stars from "@/assets/images/MASCOTCLEAN-04 - Copy.png"
import { PasswordResetForm } from "./components/PasswordResetForm";
import { useNavigate, useParams } from "react-router-dom";
import { loginApi } from "@/utils/api/loginApi";
import { toast } from "@/components/ui/Toast/use-toast";
import Loading from "@/components/PublicComponents/Loading";

interface Props { }

const Login: React.FC<Props> = () => {
  const [loadingPage, setLoadingPage] = useState(true);
  const { resetToken } = useParams();
  const navigate = useNavigate();

  async function onValidate() {
    if (resetToken) {
      const res = await loginApi.validateReset(resetToken);
      try {
        if (res.status != 200) {
          navigate("/home");
        } else if (res.data.statusCode != 200) {
          navigate("/home");
        } else {
          setLoadingPage(false);
        }
      } catch (error: any) {
        console.log(error);
        toast({
          variant: "destructive",
          title: error.response.data.message,
          description: "Please try again!",
        });
        navigate("/home");
      }
    }
  }
  useEffect(() => {
    onValidate();
  }, [resetToken]);

  return (
    <div className="container">
      {loadingPage ?
        <div className="w-full h-screen flex justify-center items-center">
          <div className="w-32 h-32">
            <Loading></Loading>
          </div>
        </div>
        : (
          <div className="flex flex-wrap-reverse justify-around items-center mt-14">
            <div className="flex flex-wrap justify-around items-center lg:basis-2/3">
              <div className="flex flex-col gap-4 mb-10 lg:basis-1/2">
                <div className="lg:min-h-44 relative">
                  <div className="font-bold text-[#38419D] text-4xl mb-4 lg:text-5xl lg:mb-0">
                    Look like you have forget your <span className="text-[#EF5DA8]">Password!</span>
                  </div>
                  <img src={Stars} alt="" className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0" />
                </div>
                <div className="text-[#38419D] text-2xl font-semibold">
                  You have requested a Password Reset for your account <span className="text-[#EF5DA8] font-bold"></span>
                </div>
              </div>
              <div className="basis-1/2">
                <img src={Mia} alt="" />
              </div>
            </div>
            <div className="lg:basis-1/3">
              <PasswordResetForm />
            </div>
          </div>
        )}
    </div>
  );
};

export default Login;
