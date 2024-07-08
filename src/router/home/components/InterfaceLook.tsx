import Carousel from "./Carousel";
import dowload from "@/assets/images/dowload.png";
import appstore from "@/assets/images/appstore.png";
import google from "@/assets/images/google-play.png";
export const InterfaceLook: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-[#38419d] mt-10 text-center">
                CHECKOUT OUR APP INTERACE LOOK
            </h1>
            <h3 className="text-center  w-[75%] md:w-[55%] mt-6 text-gray-600 text-sm">
                Experience seamless navigation and intuitive design. Dive into
                the sleek, user-friendly interface of our app today!
            </h3>
            <Carousel />
            <div className="mt-4 flex w-full justify-between p-20  flex-col md:flex-row items-center">
                <div className=" md:w-[65%] w-full mb-20 md:mb-0">
                    <h1 className="font-bold text-[#38419d] text-2xl uppercase mb-2">
                        Dowload Our App Now
                    </h1>
                    <p className="text-gray-500">
                        Unlock your path to a happier, healthier life. Download
                        the HEARTORY app now!
                    </p>
                    <div className="flex flex-col min-[400px]:justify-start min-[400px]:pr-8 cursor-pointer mt-2 min-[400px]:flex-row items-center justify-center">
                        <img src={google} className="min-[400px]:mr-4" />
                        <img src={appstore} alt="" />
                    </div>
                </div>
                <div className="md:w-[50%]">
                    <img src={dowload} />
                </div>
            </div>
        </div>
    );
};
