import React from "react";

const KPIBox = ({ children, text = "", data = "" }) => {
  return (
    <div className="relative py-12 bg-[#879fff] grow basis-1/2 px-6 flex flex-row sm:gap-4 md:gap-8 rounded-lg  justify-center items-center">
      <div className="absolute top-2 left-2 flex justify-center bg-opacity-40 bg-white p-3  rounded-lg items-center">
        {children}
      </div>
      <div className=" text-white flex flex-col px-6 justify-around items-center">
        <span className="text-2xl font-semibold">{text}</span>
        <div className="flex flex-col">
          <span className="text-6xl font-bold">{data}</span>
        </div>
      </div>
    </div>
  );
};

export default KPIBox;
