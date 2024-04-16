import React from "react";
import Mia from "@/assets/images/MASCOTCLEAN-02.png"
import Stars from "@/assets/images/MASCOTCLEAN-04.png"
import { Input } from "@/components/ui/Input"

const Introduction: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col gap-10">
        <div className="flex flex-row">
          <div className="font-bold text-[#38419D] text-6xl">
            A solution for your <span className="text-[#EF5DA8]">heart</span> needs.
          </div>
          <div><img src={Stars} alt="" /></div>
        </div>
        <div className="text-[#8A8585] text-2xl font-bold">
          Using your heart rate, we calculate whether the exercise is suitable for you.
        </div>
        <div>
          <Input
            placeholder="Search the features"
            className="max-w-lg rounded-full h-[75px] text-xl p-10 font-medium text-[#8A8585]"
          />
        </div>
      </div>
      <div className="">
        <img src={Mia} alt="" />
      </div>
    </div>
  );
};

export default Introduction;
