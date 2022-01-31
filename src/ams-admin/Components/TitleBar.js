import React from "react";

const TitleBar = () => {
  return (
    <div className="w-full h-16 rounded-md flex justify-end px-8 items-center bg-white shadow-xl ">
      <p className="text-lg italic">Year</p>
      <select
        defaultValue="2021"
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
      <img
        src="https://cdn-icons-png.flaticon.com/512/402/402593.png"
        alt="log-out"
        className="ml-6 w-6 h-6"
      />
    </div>
  );
};

export default TitleBar;
