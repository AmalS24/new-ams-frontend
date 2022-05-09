import React from "react";
import { Link } from "react-router-dom";
import logo from "./Icons/logo.png";
import reg from "./Icons/reg.png"

function AMS() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-white">
      <div className="flex font-poppins items-center cursor-pointer space-x-8 justify-end p-8 w-screen h-16">
        <p className="text-lg hover:text-red-600">Home</p>
        <p className="text-lg hover:text-red-600">About</p>
        <Link to='/registration' className="text-lg  hover:text-red-600 underline">Register</Link>
        <Link to='/login' className="text-lg  hover:text-red-600 underline">Login</Link>
      </div>
      <div className="bg-white w-full  sm:flex sm:flex-col md:flex-row justify-between p-8 h-full">
        <div className="w-[380px] xl:mt-14 xl:ml-40 2xl:mt-24 h-[520px] 2xl:ml-44 cursor-pointer  relative">
          <div className="h-[300px] flex px-10 py-6 justify-between rounded-md w-[400px] transition hover:-translate-y-16 shadow-xl bg-slate-200 top-8 -right-10 absolute">
          <div className="w-40 h-36 rounded-md bg-white">
              <p className="text-center mt-3 text-md uppercase">Forms</p>
          </div>
          <div className="w-36 h-36 rounded-md bg-white">
          <p className="text-center mt-3 text-md uppercase">Payment</p>
          </div>
          </div>
          <div className="h-[300px] flex px-10 py-6 justify-between rounded-md w-[400px] transition hover:-translate-y-14 shadow-xl bg-slate-300 top-12 -right-16 absolute">
          <div className="w-40 h-36 rounded-md bg-white">
              <p className="text-center mt-3 text-md uppercase">Register</p>
          </div>
          <div className="w-36 h-36 rounded-md bg-white">
          <p className="text-center mt-3 text-md uppercase">Login</p>
          </div>
          </div>
          <div className="h-[300px] rounded-md w-[400px] transition hover:-translate-y-2 shadow-xl bg-slate-200 top-16 -right-24 absolute">
            <div className="w-full opacity-75  bg-gray-400 h-6 flex items-center p-3 space-x-2 justify-end rounded-tr-md rounded-tl-md">
              <div className="w-3 h-3 rounded-full bg-green-600"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
              <div className="w-3 h-3 rounded-full bg-red-600"></div>
            </div>
            <div className="w-full h-full flex items-center justify-center">
                {/* <div className="w-56 h-44 rounded-md bg-white"></div> */}
            </div>
          </div>
        </div>
        <div className="xl:w-[400px] 2xl:w-1/2 hidden sm:flex h-[520px] items-center justify-center">
          <img src={logo} alt="" className="md:w-[480px] 2xl:w-auto h-auto" />
        </div>
      </div>
    </div>
  );
}

export default AMS;
