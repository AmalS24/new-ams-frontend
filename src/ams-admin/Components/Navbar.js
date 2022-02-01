import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  
  return (
    <div id="bar" className={props.data}>
      <div className="w-full h-full flex flex-col items-center justify-center space-y-8  rounded-md">
        <Link onClick={props.onToggle} to="/home" className="text-white   hover:scale-110  italic text-lg">
          Home
        </Link>
        <Link onClick={props.onToggle} to="/search" className="text-white  hover:scale-110  italic text-lg">
          Search
        </Link>
        <Link onClick={props.onToggle} to="/nri" className="text-white hover:scale-110 italic text-lg">
          NRI
        </Link>
        <Link onClick={props.onToggle} to="/mgmt" className="text-white  hover:scale-110  italic text-lg">
          Management
        </Link>
        <Link onClick={props.onToggle} to="/gov" className="text-white  hover:scale-110  italic text-lg">
          Government
        </Link>
        <Link onClick={props.onToggle} to="/verify" className="text-white  hover:scale-110  italic text-lg">
          Profile Verification
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
