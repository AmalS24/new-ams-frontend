import React from "react";
import { Link } from "react-router-dom";

const TitleBar = (props) => {
  return (
    <div className="w-full  sm:h-16 rounded-md flex justify-between p-3 sm:px-8 items-center bg-white shadow-xl ">
      <div className="flex w-auto">
        <p className="text-lg hidden xl:flex  italic">Registration Status: </p>
        <svg
        onClick={props.onToggle}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className=" transition hover:rotate-45 w-7 h-7 xl:hidden"
        >
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
        {/* <p  className="text-xl animate-pulse font-bold ml-3 uppercase text-green-600 italic">active </p> */}
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
        <Link
          to="/login"
          onClick={localStorage.removeItem("admin_access_token")}
        >
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
