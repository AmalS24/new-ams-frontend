import React, { useState } from "react";
import ChartDemo from "./ChartDemo.js"

const Home = () => {
  

  return (
    <div className="w-screen h-screen flex items-center p-6 justify-center bg-slate-300">
      <div className="w-1/6 flex p-4 h-full">
        <div className="w-full h-full bg-zinc-800 rounded-md"></div>
      </div>
      <div className="w-5/6 flex space-y-4 flex-col p-4 h-full">
        <div className="w-full h-16 rounded-md flex justify-end px-8 items-center bg-white shadow-xl ">
          <p className="text-lg italic">Year</p>
          <select
            defaultValue="2021"
            className="w-auto ml-2 px-2 bg-slate-200 rounded-full h-8"
          >
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2645/2645897.png"
            alt="log-out"
            className="ml-6 w-6 h-6"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/402/402593.png"
            alt="log-out"
            className="ml-6 w-6 h-6"
          />
        </div>
        <div className="w-full h-full p-4 space-x-6 flex ">
          <div className="w-1/2 h-full flex flex-col  space-y-6">
            <div className="h-1/3 w-full p-5 flex items-center justify-center space-y-3 bg-white rounded-md shadow-2xl">
              <p className="text-4xl text-center italic">Total Registations: <b className="text-5xl">1539</b></p>
              
             
            </div>
            <div className="h-1/3 w-full p-5 flex items-center justify-center space-y-3 bg-white rounded-md shadow-2xl">
            <p className="text-3xl text-center italic">Payment Completed: <b className="text-5xl">800</b></p>
            </div>
            <div className="h-1/3 w-full p-5 flex items-center justify-center space-y-3 bg-white rounded-md shadow-2xl">
            <p className="text-3xl text-center  italic">Profiles Verified: <b className="text-5xl">746</b></p>
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col items-center justify-center shadow-xl bg-white rounded-md">
          <p className="text-center font-semibold mb-6 text-4xl">Registration Statistics</p>
            <div className="w-[400px] h-[400px]"><ChartDemo /></div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
