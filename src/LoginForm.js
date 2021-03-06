import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Zoom } from "react-toastify";
import home from "./Icons/home.svg";
import help from "./Icons/help.svg";
import ball from "./Icons/creative_ball.svg";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "./components/Loader";

const LoginForm = () => {
  const [ForgotPassword, setForgotPassword] = useState(false);
  const default_string =
    "We will resend the credentials back to your Registered email-Id";
  // const fail_string = "Sorry we couldn't find your Email-Id ,try again";
  // const success_string = "Credentials has been re-send to your email-id";
  const str = 
    "After Registration we've send an email to your registered Email-ID" +
    " use the credentials to Sign-In to your account, if you haven't " +
    "received the mail ,do check your spam folder also " +
    "Otherwise contact us";

  const nav = useNavigate()
  const [loading,setLoading] = useState(false);

  const Login =(e)=>{
    e.preventDefault()
    setLoading(true)
    const data = {
      applicationNo:document.getElementById("userID").value,
      password     :document.getElementById("password").value,
    }
    if(data.applicationNo === "admin")
    {
      localStorage.setItem("admin_access_token","abcd")
      nav("/admin")
      window.location.reload()
    }
    else if(data.applicationNo === "coadmin")
    {
      localStorage.setItem("coadmin_access_token","abcd")
      nav("/coadmin")
      window.location.reload()
    }
    else
    {
      axios
      .post("https://ams-backend-api.herokuapp.com/user/login",data)
      .then((response) => {
        setLoading(false)
        if(response.status === 200)
        {
          nav("/NRIapplication")
          toast.success("Login success")
          localStorage.setItem("access_token", response.data.token);
          localStorage.setItem("user_id",data.applicationNo)
          window.location.reload()
          console.log(response,localStorage.getElementById("access_token"))
        }
        else
          toast.error("Invalid UserID or Password")
      })
      .catch((response)=>{
        setLoading(false)
        if (response.status === 400) {
          Error(toast.error("invalid user name or password"));
          console.log("error", response);
        }
      })
    }
      console.log(data)
  }
  if(loading)
    return(<Loader/>)
  else
  return (
    <div className="min-w-screen relative  h-screen flex items-center justify-center bg-zinc-700">
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
        src={ball}
        alt="doodle"
        className="w-auto h-[700px] z-10 opacity-20 absolute "
      />
      {ForgotPassword ? (
        <form
          action=""
          className="w-80 sm:w-96 p-4 sm:p-8  h-auto absolute z-20 shadow-xl rounded-sm shadow-zinc-900 bg-white"
        >
          <p className="text-2xl sm:text-3xl mt-3 uppercase text-center  sm:font-semibold">
            Forgot Password
          </p>
          <div className="w-full mt-5 space-y-7 p-2 h-auto ">
            <p className="h-auto text-center w-full border-[2px] text-pink-700 bg-pink-50 rounded-md p-3 text-md border-pink-700 italic ">
              {default_string}
            </p>
            <input
              placeholder="Registered Email-ID"
              type="email"
              className="h-12 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
            <button className="w-auto px-4 text-white text-lg rounded-md hover:bg-pink-700 bg-pink-800 h-12">
              Resend
            </button>
          </div>
          <p
            onClick={() => {
              setForgotPassword(!ForgotPassword);
            }}
            className="text-right cursor-pointer hover:text-pink-700 text-lg mr-4 "
          >
            Sign-In
          </p>
        </form>
      ) : (
        <form
          action=""
          onSubmit={Login}
          className="w-80 sm:w-96 p-4 sm:p-8  h-96 absolute z-20 shadow-xl rounded-sm shadow-zinc-900 bg-white"
        >
          <p className="text-4xl mt-3 text-center sm:font-semibold">SIGN-IN</p>
          <div className="w-full mt-5 space-y-8 p-2 h-auto ">
            <input
              placeholder="Registration No."
              type="text"
              id="userID"
              className="h-12 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
            <input
              placeholder="Password"
              type="text"
              id="password"
              className="h-12 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
            />
            <button 
            className="w-auto px-4 text-white text-lg rounded-md hover:bg-pink-700 bg-pink-800 h-12">
              Sign-In
            </button>
          </div>
          <p
            onClick={() => {
              setForgotPassword(!ForgotPassword);
            }}
            className="text-right cursor-pointer hover:text-pink-700 text-lg mr-4 "
          >
            Forgot Password!
          </p>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
