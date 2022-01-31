import React from "react";
import RegChart from "../Components/RegChart.js";

const HomePage = () => {
  return (
    <div className="w-full h-full p-4 space-x-6 flex ">
      <div className="w-1/2 h-full flex flex-col  space-y-6">
        <div className="h-1/3 w-full flex space-x-5 ">
          <div className="w-1/2 h-full flex flex-col items-center justify-center bg-white border-l-[8px] border-black">
            <p className="text-center text-bold uppercase text-4xl">Total</p>
            <p className="text-center mt-3 font-bold uppercase text-5xl">
              2345
            </p>
          </div>
          <div className="w-1/2 h-full flex flex-col items-center justify-center bg-white border-l-[8px] border-black">
            <p className="text-center text-bold uppercase text-3xl">
              completed
            </p>
            <p className="text-center mt-3 font-bold uppercase text-5xl">986</p>
          </div>
        </div>

        <div className="h-1/3 w-full flex space-x-5 ">
          <div className="w-1/2 h-full flex flex-col items-center justify-center bg-white border-l-[8px] border-black">
            <p className="text-center text-bold uppercase text-4xl">Verified</p>
            <p className="text-center mt-3 font-bold uppercase text-5xl">575</p>
          </div>
          <div className="w-1/2 h-full flex flex-col items-center justify-center bg-white border-l-[8px] border-black">
            <p className="text-center text-bold uppercase text-3xl">
              Unverified
            </p>
            <p className="text-center mt-3 font-bold uppercase text-5xl">
              {986 - 575}
            </p>
          </div>
        </div>

        <div className="h-1/3 w-full flex border-l-[8px] border-black">
          <div className="w-1/3 h-full flex flex-col items-center justify-center bg-white">
            <p className="text-center text-bold uppercase text-4xl">NRI</p>
            <p className="text-center mt-3 font-bold uppercase text-5xl">123</p>
          </div>
          <div className="w-1/3 h-full flex flex-col items-center justify-center bg-white ">
            <p className="text-center text-bold uppercase text-3xl">Mgmt</p>
            <p className="text-center mt-3 font-bold uppercase text-5xl">
              1385
            </p>
          </div>
          <div className="w-1/3 h-full flex flex-col items-center justify-center bg-white ">
            <p className="text-center text-bold uppercase text-3xl">gov</p>
            <p className="text-center mt-3 font-bold uppercase text-5xl">
              {2345 - (123 + 385)}
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col items-center justify-center shadow-xl bg-white rounded-md">
        <p className="text-center font-semibold mb-6 text-4xl">
          Registration Statistics
        </p>
        <div className="w-[400px] h-[400px]">
          <RegChart />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
