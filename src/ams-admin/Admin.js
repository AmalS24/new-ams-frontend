import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import TitleBar from "./Components/TitleBar.js";
import HomePage from "./Pages/HomePage.js";
import SearchPage from "./Pages/SearchPage.js";

const Admin = () => {
  return (
    <div className="w-screen h-screen flex items-center p-6 justify-center bg-slate-300">
        <Navbar />
        <div className="w-5/6 flex space-y-4 flex-col p-4 h-full">
          <TitleBar />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
    </div>
  );
};

export default Admin;
