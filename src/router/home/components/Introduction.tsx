import React from "react";
import Mia from "@/assets/images/MASCOTCLEAN-02.png"
import Stars from "@/assets/images/MASCOTCLEAN-04.png"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/Input"
import { slideInFromLeft, slideInFromRight } from "@/utils/motion/motion";

const Introduction: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-wrap items-center justify-around lg:justify-between text-center lg:text-start mb-10">
      <motion.div
        variants={slideInFromLeft(0.2)}
        className="flex flex-col gap-10 lg:basis-3/5">
        <div

          className="flex flex-row justify-around lg:justify-between relative">
          <div className="font-bold text-[#38419D] text-[44px] my-10">
            A solution for your <span className="text-[#EF5DA8]">heart</span> needs
          </div>
          <div>
            <img src={Stars} alt="" className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0" />
          </div>
        </div>
        <div
          className="text-[#8A8585] text-2xl font-bold">
          Using your heart rate, we calculate whether the exercise is suitable for you.
        </div>
        <div className="mb-10">
          <Input
            placeholder="Search the features"
            className="max-w-lg rounded-full h-[75px] text-xl p-10 font-medium text-[#8A8585]"
          />
        </div>
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.3)}
        className="lg:basis-2/5">
        <img src={Mia} alt="" />
      </motion.div>
    </motion.div>
  );
};

export default Introduction;
