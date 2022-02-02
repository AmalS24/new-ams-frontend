import React ,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import TitleBar from "./Components/TitleBar.js";
import HomePage from "./Pages/HomePage.js";
import SearchPage from "./Pages/SearchPage.js";

const Admin = () => {
  const open = "w-full bg-zinc-800 z-10 bg-opacity-90 xl:bg-opacity-100  fixed xl:relative xl:rounded-md xl:w-1/6 p-2 h-screen"
  const close = "bg-zinc-800 hidden xl:flex  fixed xl:relative xl:rounded-md xl:w-1/6 p-2 h-full"
  const [toggleBar,setToggleBar] = useState(close);
  const closeNavBar = (e) => {
    setToggleBar(close)
  }
  const openNavBar = (e) => {
    setToggleBar(open)
  }
  return (
    <div className="w-screen h-screen overflow-y-auto flex items-center py-6 xl:p-6 justify-center bg-slate-300">
        <Navbar data={toggleBar} onToggle={closeNavBar} />
        <div className="w-auto sm:w-5/6 flex space-y-4 flex-col sm:p-4 h-full">
          <TitleBar onToggle={openNavBar} />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
    </div>
  );
};

export default Admin;
