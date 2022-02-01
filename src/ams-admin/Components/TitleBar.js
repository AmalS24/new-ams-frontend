import React from "react";
import { Link } from "react-router-dom";

const TitleBar = (props) => {
  return (
    <div className="w-full sm:h-16 rounded-md flex justify-between p-3 sm:px-8 items-center bg-white shadow-xl ">
      <div className="flex w-auto">
      <p className="text-lg hidden xl:flex  italic">Registration Status: </p>
      <img onClick={props.onToggle} src="https://t4.ftcdn.net/jpg/00/65/77/21/240_F_65772192_jm8MYL39Bp5pp90KlyGWrRgErYa70lZZ.jpg" alt="navbar" className="w-9 h-9 xl:hidden" />
      <p  className="text-xl animate-pulse font-bold ml-3 uppercase text-green-600 italic">active </p>
      {/* <p className="text-xl animate-pulse font-bold ml-3 uppercase text-red-600 italic">closed </p> */}
      </div>
      <div className="hidden xl:flex w-auto items-center">
      <p className="text-lg italic">Program</p>
      <select
        defaultValue="2021"
        className="w-auto ml-2 px-2 bg-slate-200 rounded-full h-8"
      >
        <option value="btech">BTech</option>
        <option value="mtech">MTech</option>
      </select>
      <p className="text-lg ml-6 italic">Year</p>
      <select
        defaultValue="2022"
        className="w-auto ml-2 px-2 bg-slate-200 rounded-full h-8"
      >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2645/2645897.png"
        alt="log-out"
        className="ml-6 w-6 h-6"
      />
      <Link to="/login" onClick={localStorage.removeItem("admin_access_token")}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/402/402593.png"
        alt="log-out"
        className="ml-6 w-6 h-6"
      />
      </Link>
      </div>
    </div>
  );
};

export default TitleBar;
