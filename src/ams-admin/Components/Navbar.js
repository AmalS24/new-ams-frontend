import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  
  return (
    <div id="bar" className={props.data}>
      <div className="w-full h-full absolute xl:relative flex flex-col items-center justify-center space-y-8 text-lg sm:text-2xl  xl:text-lg xl:rounded-md">
        <Link onClick={props.onToggle} to="/home" className="text-white   hover:scale-110  italic ">
          Home
        </Link>
        <Link onClick={props.onToggle} to="/search" className="text-white  hover:scale-110  italic ">
          Search
        </Link>
        <Link onClick={props.onToggle} to="/nri" className="text-white hover:scale-110 italic ">
          NRI
        </Link>
        <Link onClick={props.onToggle} to="/mgmt" className="text-white  hover:scale-110  italic ">
          Management
        </Link>
        <Link onClick={props.onToggle} to="/gov" className="text-white  hover:scale-110  italic ">
          Government
        </Link>
        <Link onClick={props.onToggle} to="/verify" className="text-white  hover:scale-110  italic ">
          Profile Verification
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
