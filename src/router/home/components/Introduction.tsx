import React from "react";
import Phone from "@/assets/images/Phone.png";
import { motion } from "framer-motion";
import appstore from "@/assets/images/appstore.png";
import google from "@/assets/images/google-play.png";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion/motion";
import Background from "@/assets/images/Background Image.png";
const Introduction: React.FC = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex  flex-col items-center justify-around lg:justify-between text-center lg:text-start mb-10 p-10 min-[1110px]:flex-row"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <motion.div
                variants={slideInFromLeft(0.2)}
                className="flex flex-col gap-10  sm:border-[18px] border-[#66D0A4] sm:h-[500px] sm:w-[500px] relative"
            >
                <div className=" sm:absolute sm:h-[400px] sm:w-[450px] bg-white left-[-30px] top-6 flex flex-col p-8">
                    <h1 className="font-bold text-5xl uppercase text-[#38419d]">
                        A solution for your heart needs
                    </h1>
                    <h2 className="mt-4 font-bold text-[#66D0A4] text-xl">
                        Every Heartbeat is a story.We are helping you understand
                        your heart.
                    </h2>
                    <h1 className="mt-4 font-bold text-[#38419d] text-3xl">
                        DOWLOAD APP NOW
                    </h1>
                    <div className="flex flex-col min-[400px]:justify-start min-[400px]:pr-8 cursor-pointer mt-2 min-[400px]:flex-row items-center justify-center">
                        <img src={google} className="min-[400px]:mr-4" />
                        <img src={appstore} alt="" />
                    </div>
                </div>
            </motion.div>
            <motion.div
                variants={slideInFromRight(0.3)}
                className="lg:basis-2/5"
            >
                <img src={Phone} alt="" />
            </motion.div>
        </motion.div>
    );
};

export default Introduction;
