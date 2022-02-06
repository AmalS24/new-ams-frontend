import React from "react";
import { Link } from "react-router-dom";



const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-white">
      <img src="https://www.vizion.com/wp-content/uploads/2018/09/shutterstock_479042983-636x344.jpg" alt="404 page not found" className="" />
      <Link to='/login' className="text-2xl mt-3">Click here to Sign-In</Link>
    </div>
  );
};

export default NotFound;
