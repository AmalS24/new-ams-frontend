import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Zoom } from "react-toastify";
import home from "../SvgIcons/home.svg";
import help from "../SvgIcons/help.svg";

const NriForm = () => {
  return (
    <div className="w-screen relative overflow-x-hidden h-screen flex p-20 justify-center bg-zinc-700">
      <ToastContainer
        transition={Zoom}
        hideProgressBar={true}
        autoClose={10000}
        limit={1}
        className="mt-12"
        bodyClassName="text-sm md:text-md text-black"
        closeOnClick={true}
      />
      <div className="w-full top-1 h-14 absolute z-20 flex items-center justify-between px-8">
        <img src={home} alt="home" className="w-8 h-8 cursor-pointer" />

        <img
          onClick={() => {
            toast(str);
          }}
          src={help}
          alt="help"
          className="w-8 h-8 cursor-pointer"
        />
      </div>

      <form
        action=""
        className="w-[350px] sm:w-[600px] lg:w-[980px] h-auto border-[4px] bg-zinc-200 absolute z-20"
      >
        <div className="w-auto italic flex h-14">
          <div className="w-full border-t-[5px] items-center cursor-pointer flex justify-center bg-white border-pink-700">
            <p className="text-pink-700 text-2xl">Personal Details</p>
          </div>
          <div className="w-full hidden sm:flex border-b-[5px] items-center cursor-pointer justify-center border-pink-300">
            <p className="text-pink-300 text-2xl">Payment Details</p>
          </div>
        </div>

        {/* main-container */}
        <div className="w-full bg-white pt-8 h-auto space-y-2 p-4">
          
          {/* first-row-container */}
          <div className="w-full h-auto bg-gray-200 flex ">
            {/* inner-2/3-vertical-partition */}
            <div className="w-full lg:w-2/3 space-y-2 bg-gray-300 ">
              {/* first-2/3-row-container */}
              <div className="w-full h-auto lg:space-x-2 bg-red-300 lg:flex">
                {/* divide-2/3-again-vertically-1/3 three times */}
                <div className="lg:w-1/3 bg-gray-100">
                  <input
                    placeholder="Registration No."
                    type="text"
                    className="h-10 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                </div>
                <div className="lg:w-1/3  bg-gray-100">
                  <input
                    placeholder="Registration No."
                    type="text"
                    className="h-10 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                </div>
                <div className="lg:w-1/3 bg-gray-100">
                  <input
                    placeholder="Registration No."
                    type="text"
                    className="h-10 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                </div>
              </div>
              <div className="w-full h-auto lg:space-x-2 bg-red-400 lg:flex">
                {/* second-2/3-row-container */}
                <div className="lg:w-1/3 bg-gray-100">
                  {/* split-vertically-1/3-and-2/3 */}
                  <input
                    placeholder="Registration No."
                    type="text"
                    className="h-10 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                </div>
                <div className="lg:w-2/3 bg-gray-100">
                  <input
                    placeholder="Registration No."
                    type="text"
                    className="h-10 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-36 bg-gray-200 flex "></div>
        </div>
      </form>
    </div>
  );
};
const str =
  "After Registration we've send an email to your registered Email-ID" +
  " use the credentials to Sign-In to your account, if you haven't " +
  "received the mail ,do check your spam folder also " +
  "Otherwise contact us";
// setTimeout(() => {
//   toast(str);
// }, 3000);

export default NriForm;
