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
        <div>
            <div className="font-bold text-[#EF5DA8] text-3xl sm:text-3xl mb-10 text-center">
                ABOUT OUR APP
            </div>

            <motion.div
                initial="hidden"
                animate="visible"
                ref={ref}
                className=" md:flex justify-between "
            >
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={slideInFromRight(0.3)}
                    className=" md:max-w-[48%] mb-14 w-full"
                >
                    <img src={showcase} />
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={slideInFromLeft(0.3)}
                    className="flex flex-col md:w-[48%]"
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
                                <h3 className="text-sm">{info.description}</h3>
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AppInfo;
