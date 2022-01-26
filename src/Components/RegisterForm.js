import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Zoom } from "react-toastify";
import doodle_background from "../SvgIcons/doodle.svg";

import home from "../SvgIcons/home.svg";
import help from "../SvgIcons/help.svg";

const RegisterForm = () => {
  const str =
    "Provide the necessary details to complete registration"+
    " (Fields with * are mandatory). After registration check "+
    "your registered email for the sign in credentials ";

    setTimeout(() => {
      toast(str)
    }, 3000);

  return (
    <div className="w-screen relative overflow-x-hidden h-screen flex items-center justify-center bg-zinc-700">
      <ToastContainer
        transition={Zoom}
        hideProgressBar={true}
        autoClose={10000}
        limit={1}
        className="mt-12"
        bodyClassName="text-black"
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
      <img
        src={doodle_background}
        alt="doodle"
        className="w-auto h-[700px] z-10 opacity-10 absolute "
      />
      <form
        action=""
        className="w-[600px] absolute z-20 h-auto py-8 px-9 space-y-4 rounded-sm bg-white shadow-2xl shadow-zinc-900"
      >
        <p className="text-3xl text-center font-semibold uppercase">
          Registration
        </p>

        {/* first_row_div */}
        <div className="w-full  h-auto ">
          <label htmlFor="name" className="text-lg ml-1 italic">
            Name*
          </label>

          <div className="w-full  h-auto flex space-x-6">
            <input
              placeholder="First"
              type="text"
              className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
            <input
              placeholder="Middle"
              type="text"
              className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
            <input
              placeholder="Last"
              type="text"
              className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
          </div>
        </div>

        {/* sec_row_div */}
        <div className="w-full  h-auto ">
          <div className="flex w-full justify-between">
            <label htmlFor="name" className="text-lg ml-1 italic">
              Email*
            </label>
            <label htmlFor="name" className="text-lg mr-28 italic">
              Phone
            </label>
          </div>

          <div className="w-full   h-auto flex space-x-6">
            <input
              placeholder="Email"
              type="text"
              className="h-11 w-2/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
            <input
              placeholder="Phone"
              type="text"
              className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
          </div>
        </div>

        {/* third_row_div */}
        <div className="w-full  h-auto ">
          <div className="flex w-full justify-between">
            <label htmlFor="name" className="text-lg ml-1  italic">
              Gender*
            </label>
            <label htmlFor="name" className="text-lg italic">
              Quota*
            </label>
            <label htmlFor="name" className="text-lg mr-20 italic">
              Program*
            </label>
          </div>
          <div className="w-full  h-auto flex space-x-6">
            <input
              placeholder="Gender"
              type="text"
              className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
            <input
              placeholder="Quota"
              type="text"
              className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
            <input
              placeholder="Program"
              type="text"
              className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
          </div>
        </div>

        {/* fourth_row_div */}
        <div className="w-full  h-auto ">
          <div className="flex w-full justify-between">
            <label htmlFor="name" className="text-lg ml-1 italic">
              Aadhar Number
            </label>
            <label htmlFor="name" className="text-lg mr-36 italic">
              Date of Birth*
            </label>
          </div>
          <div className="w-full h-auto flex space-x-6">
            <input
              placeholder="Aadhar No."
              type="tel"
              className="h-11 w-1/2 border-[2px] rounded-md pl-4 text-xl  focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
            <input
              onClick={(e) => {
                e.target.type = "date";
              }}
              placeholder="DOB"
              type="text"
              className="h-11 w-1/2 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
          </div>
        </div>

        {/* button_div */}
        <div className="w-full pt-2 flex items-center justify-between px-1">
          <button className="w-auto h-auto p-3 text-xl text-white rounded-md italic hover:bg-pink-600 bg-pink-800">
            Submit
          </button>
          <p className="font-thin text-lg">Already Registered ? Try Sign-In</p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
