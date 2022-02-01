import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-1/6 flex p-2 h-full">
      <div className="w-full h-full flex flex-col items-center justify-center space-y-8 bg-zinc-800 rounded-md">
        <Link to="/home" className="text-white   hover:scale-110  italic text-lg">
          Home
        </Link>
        <Link to="/search" className="text-white  hover:scale-110  italic text-lg">
          Search
        </Link>
        <Link to="/nri" className="text-white hover:scale-110 italic text-lg">
          NRI
        </Link>
        <Link to="/mgmt" className="text-white  hover:scale-110  italic text-lg">
          Management
        </Link>
        <Link to="/gov" className="text-white  hover:scale-110  italic text-lg">
          Government
        </Link>
        <Link to="/verify" className="text-white  hover:scale-110  italic text-lg">
          Profile Verification
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
