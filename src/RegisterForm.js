import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Zoom } from "react-toastify";
import Loader from "./components/Loader"
import axios from "axios"
import { Link,useNavigate } from "react-router-dom";

import doodle_background from "./Icons/doodle.svg";
import home from "./Icons/home.svg";
import help from "./Icons/help.svg";

const RegisterForm = () => { 
  const str =
    "Provide the necessary details to complete registration"+
    " (Fields with * are mandatory). After registration check "+
    "your registered email for the sign in credentials ";
    
    const [loading,setLoading] = useState(false)
    const nav = useNavigate()

    const registerSubmit=(e)=>{
      e.preventDefault();
      setLoading(true);
      const data = {
        firstName  : document.getElementById("fname").value,
        middleName : document.getElementById("mname").value,
        lastName   : document.getElementById("lname").value,
        gender     : document.getElementById("gender").value,
        email      : document.getElementById("email").value,
        aadhar     : document.getElementById("aadhar").value,
        dob        : document.getElementById("dob").value,
        phone      : document.getElementById("phone").value,
        quota      : document.getElementById("quota").value,
        course     : document.getElementById("program").value,
        age        : 18,
      } 
      axios.post("https://ams-backend-api.herokuapp.com/user/register",data)
      .then((Response) => {
        console.log(data,Response)
        switch (Response.status) {
          case 200:
            nav("/login")
            toast.success("Registration Successful ");
            setLoading(false);
            break;
          case 204:
            setLoading(false);
            Error(toast.error("Required Field Empty"));
            break;
          default: setLoading(false);
        }
      }).catch(({ response }) => {
        if (response) {
          console.log(response)
          switch (response.status) {
            case 409:
              setLoading(false)
              toast.info("Looks like you've Already registered");
              break;
            default:
              setLoading(false);
              toast.warn("Something went wrong ! Plz refresh & Try Again");
          }
        }
      });      
    }

  if(loading)
    return(<Loader/>)
  else 
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
        <Link to="/">
        <img src={home} alt="home" className="w-8 h-8 cursor-pointer" />
        </Link>
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
        onSubmit={registerSubmit}
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
              id="fname"
              className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
            <input
              placeholder="Middle"
              type="text"
              id="mname"
              className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
            <input
              placeholder="Last"
              type="text"
              id="lname"
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
              id="email"
              className="h-11 w-2/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
            <input
              placeholder="Phone"
              type="text"
              id="phone"
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
            <label htmlFor="name" className="text-lg mr-20 italic">
              Program*
            </label>
            <label htmlFor="name" className="text-lg italic">
              Quota*
            </label>
          </div>
          <div className="w-full  h-auto flex space-x-6">
          <select
              name="gender"
              className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
              id="gender"
            >
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <select
              name="program"
              className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
              id="program"
            >
              <option value=""></option>
              <option value="BTech">BTech</option>
              <option value="MTech">MTech</option>
            </select>
            <select
              name="quota"
              className="h-11 w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
              id="quota"
            >
              <option value=""></option>
              <option value="NRI">NRI</option>
              <option value="Government">Government</option>
              <option value="Management">Management</option>
            </select>
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
              id="aadhar"
              className="h-11 w-1/2 border-[2px] rounded-md pl-4 text-xl  focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
            <input
              onClick={(e) => {
                e.target.type = "date";
              }}
              placeholder="DOB"
              type="date"
              id="dob"
              className="h-11 w-1/2 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
          </div>
        </div>

        {/* button_div */}
        <div className="w-full pt-2 flex items-center justify-between px-1">
          <button className="w-auto h-auto p-3 text-xl text-white rounded-md italic hover:bg-pink-600 bg-pink-800">
          Submit
          </button>
          <p className="font-thin text-lg">Already Registered ? Try <Link to="/login">Sign-in</Link></p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
