import Background from "@/assets/images/Background Image.png";
import Screen from "@/assets/images/phone-screen.png";
import { features } from "../constants";
export const Features: React.FC = () => {
    return (
        <div
            className="w-full min-h-[1300px] flex flex-col items-center pb-10 pt-10 bg-cover"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <h1 className="text-white text-3xl text-center mb-10 pt-5">
                App Features
            </h1>
            <h3 className="text-center text-white w-[45%]">
                All you need is a camera, flashlight, and your finger
            </h3>
            <div className="mt-20 md:mt-60 relative flex flex-col items-center">
                {features.slice(0, 3).map((item) => {
                    return (
                        <div key={item.title} className={item.className}>
                            <img src={item.icon} className="w-10 mb-2" />
                            <h1 className="uppercase font-bold text-white text-xl  mb-2">
                                {item.title}
                            </h1>
                            <h3 className="m-0 text-white text-sm ">
                                {item.description}
                            </h3>
                        </div>
                    );
                })}
                <img src={Screen} className="w-[50%] mb-8 md:w-[70%] md:mb-0" />
                {features.slice(-3).map((item) => {
                    return (
                        <div key={item.title} className={item.className}>
                            <img src={item.icon} className="w-10 mb-2" />
                            <h1 className="uppercase font-bold text-white text-xl  mb-2">
                                {item.title}
                            </h1>
                            <h3 className="m-0 text-white text-sm ">
                                {item.description}
                            </h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Features;
