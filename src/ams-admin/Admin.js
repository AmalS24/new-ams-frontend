import React ,{useState} from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import TitleBar from "./Components/TitleBar.js";
import HomePage from "./Pages/HomePage.js";
import TableDemo from "./Pages/TableDemo.js";

const Admin = () => {
  const open = "w-screen h-full top-0 bg-zinc-800 z-20 bg-opacity-90 xl:bg-opacity-100 fixed xl:relative xl:rounded-md xl:w-1/6 p- "
  const close = "bg-zinc-800 hidden xl:flex  fixed xl:relative xl:rounded-md xl:w-1/6 p-2 h-full"
  const [toggleBar,setToggleBar] = useState(close);
  const closeNavBar = (e) => {
    setToggleBar(close)
  }
  const openNavBar = (e) => {
    setToggleBar(open)
  }
  return (
    <div className=" h-auto min-w-screen xl:h-screen min-h-screen flex items-center py-6 xl:p-6  bg-slate-300">
      
        <Navbar data={toggleBar} onToggle={closeNavBar} />
        <div className="w-auto mx-auto  font-poppins font-lg sm:w-5/6 flex space-y-4 flex-col sm:p-4 h-full">
          <TitleBar onToggle={openNavBar} />
          <Outlet/>
        </div>
    </div>
  );
};

export default Admin;
