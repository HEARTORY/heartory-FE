import React from "react";

import {
  areaInfo
  // , userInfo
  // , quoNum 
} from "../constants";

const FeaturesSession: React.FC = () => {
  return (
    <div>
      <div className="font-bold text-[#EF5DA8] text-4xl mb-10">FEATURES WE PROVIDE</div>
      <div className="flex flex-wrap justify-between">
        {areaInfo.map((area) => (
          <div className="max-w-[47%] mb-14">
            <div className="flex flex-wrap gap-5 mb-3">
              <img
                className="w-[100px] h-[100px]"
                src={area.src}
                alt={area.alt}
              />
              <div className="my-auto">
                <div className="font-bold text-[#38419D] text-3xl">
                  {area.name}
                </div>
              </div>
            </div >
            <span className="text-[#8A8585] text-2xl font-bold">
              <p>{area.description}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSession;
