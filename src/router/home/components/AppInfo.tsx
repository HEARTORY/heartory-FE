import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { appInfos } from "../constants";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion/motion";
import check from "@/assets/images/checkbox-circle-fill.png";
import showcase from "@/assets/images/showcase.png";
const AppInfo: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.5, // Trigger animation when 50% of the element is in view
    });
    return (
        <div className="flex flex-col items-center">
            <div className="font-bold text-[#EF5DA8] text-3xl sm:text-3xl m text-center uppercase">
                We strive to have everything you need to live longer and happier
            </div>
            <div className="w-[90%] md:w-[50%] m-8 text-gray-500">
                HEARTORY offers evidence-based mental health program and tools
                focused on stress and anxiety that are designed to support
                worldwide health.
            </div>
            <motion.div
                initial="hidden"
                animate="visible"
                ref={ref}
                className=" flex justify-between  items-center flex-col md:flex-row"
            >
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={slideInFromRight(0.3)}
                    className=" md:max-w-[48%] mb-14 w-full flex justify-center"
                >
                    <img src={showcase} className="md:w-full w-[90%]" />
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={slideInFromLeft(0.3)}
                    className="flex flex-col w-[90%] md:w-[48%]"
                >
                    {appInfos.map((info) => {
                        return (
                            <div className="mb-10 border-[2px] p-5">
                                <div className="flex items-center ">
                                    <img src={check} className="w-6 h-6 mr-8" />
                                    <h2 className="text-[20px]">
                                        {info.title}
                                    </h2>
                                </div>
                                <h3 className="text-sm text-gray-600">
                                    {info.description}
                                </h3>
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AppInfo;
