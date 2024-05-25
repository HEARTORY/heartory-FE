import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  areaInfo
  // , userInfo
  // , quoNum 
} from "../constants";
import { slideInFromBottom, slideInFromTop } from "@/utils/motion/motion";

const FeaturesSession: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger animation when 50% of the element is in view
  });
  return (
    <div>
      <div className="font-bold text-[#EF5DA8] text-xl sm:text-4xl mb-10">FEATURES WE PROVIDE</div>
      <div className="flex flex-wrap justify-between">
        {areaInfo.map((area) => (
          <motion.div
            initial="hidden"
            animate="visible"
            ref={ref}
            className="max-w-[47%] mb-14">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromTop(0.3)}
              className="flex flex-wrap gap-5 mb-3">
              <img
                className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]"
                src={area.src}
                alt={area.alt}
              />
              <div className="my-auto min-h-14 lg:min-w-[330px]">
                <div className="font-bold text-[#38419D] text-lg sm:text-3xl">
                  {area.name}
                </div>
              </div>
            </motion.div >
            <motion.span
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromBottom(0.6)}
              className="text-[#8A8585] text-sm sm:text-2xl font-bold">
              <p>{area.description}</p>
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSession;
