import React from "react";
import { Link } from "react-router-dom";
import logo from "./Icons/logo.png";
import reg from "./Icons/reg.png";
import Typewriter from "typewriter-effect";

function AMS() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-shade ">
      <div className="flex font-poppins items-center text-white cursor-pointer space-x-8 justify-end p-8 w-screen h-16">
        <p className="text-md hover:text-red-600">Home</p>
        <p className="text-md hover:text-red-600">About</p>
        <Link
          to="/registration"
          className="text-md  hover:text-red-600 underline"
        >
          Register
        </Link>
        <Link to="/login" className="text-md  hover:text-red-600 underline">
          Login
        </Link>
      </div>
      <div className="bg-shade w-full  sm:flex sm:flex-col md:flex-row justify-between p-8 h-full">
        <div className="w-[380px] xl:mt-14 xl:ml-40 2xl:mt-24 h-[520px] 2xl:ml-44  relative">
          <div className="h-[300px]  rounded-md w-[400px]  shadow-xl bg-slate-300 top-8 -right-10 absolute"></div>
          <div className="h-[300px]  rounded-md w-[400px]  shadow-xl bg-slate-200 top-12 -right-16 absolute"></div>
          <div className="h-[300px] rounded-md w-[400px] shadow-xl bg-slate-50 top-16 -right-24 absolute">
            <div className="w-full opacity-75  bg-slate-400 h-6 flex items-center p-3 space-x-2 justify-start rounded-tr-md rounded-tl-md">
              <div className="w-3 h-3 rounded-full bg-red-600"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
              <div className="w-3 h-3 rounded-full bg-green-600"></div>
            </div>
            <div className="w-full italic h-full py-4 px-5 text-lg ">
              <Typewriter
                options={{
                  strings: [
                    "<u>Registration</u> <br/> Lorem ipsum – These words tell the brain to focus all attention on the visual design and safely ignore the content. The purpose of lorem ipsum is to create a natural looking, though nonsensical, text that doesn't distract from the layout.",
                    "<u>Login</u> <br/> Lorem ipsum – These words tell the brain to focus all attention on the visual design and safely ignore the content.",
                    "<u>Forms</u> <br/> Lorem ipsum – These words tell the brain to focus all attention on the visual design and safely ignore the content.",
                    "<u>Payment</u> <br/> Lorem ipsum – These words tell the brain to focus all attention on the visual design and safely ignore the content.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 20,
                  deleteSpeed: 20,
                  pauseFor: 10000,
                }}
              />
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
