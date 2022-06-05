import React from "react";

const Dashboard = () => {
  return (
    <div className="w-screen overflow-x-hidden h-screen bg-slate-200">
      <div className="w-full bg-white h-[140px] sm:h-[230px]">
        <img
          src="https://images.hdqwalls.com/download/black-gradient-b9-1920x1080.jpg"
          alt=""
          className="object-cover w-screen h-full"
        />
      </div>
      <div className=" m-8 lg:absolute top-24 right-10 rounded-md bg-gray-100 shadow-2xl h-auto w-auto">
        <div className="w-full h-3/5 rounded-md flex pt-8 items-center justify-center ">
          <div className="w-44 h-44 rounded-full border-[3px] border-black">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
              alt=""
              className="object-cover h-full rounded-full w-full"
            />
          </div>
        </div>
        <div className="w-full p-4 rounded-md h-2/5 ">
          <p className="text-center mb-5 font-bold text-lg uppercase ">
            Marc Benedict
          </p>
          <div className="w-full font-semibold text-center text- italic h-auto pb-8">
            Dob:&nbsp;&nbsp;12/02/2001
            <br />
            dhjgchx@gmail.com
            <br />
            8923-398-329
          </div>
          <div className="flex space-x-2 items-center justify-center w-full h-auto">
            <button className="w-32 h-12 mr-2 font-bold rounded-md border-[2px] border-black">
              Sign Out
            </button>
            <button className="w-32 text-white text-center h-12 rounded-md bg-gray-800">
              Print
            </button>
          </div>
        </div>
      </div>
      <div className="xl:w-4/6 lg:flex lg:space-x-8 lg:space-y-0 space-y-4 lg:p-8 m-8 h-auto">
        <div className="xl:w-1/2 p-8 space-y-2 shadow-xl bg-white rounded-md">
          <p className="text-3xl mb-2 ">Parental Details</p>
          <p className="text-lg font-light mb-2 italic ">
            {" "}
            Parent/Gaurdian: <b>Benedict</b>
            <br />
            Occupation: <b>Advocate</b>
            <br />
            Relation with Applicant: <b>Father</b>
            <br />
            NRI Sponsor: <b>Nil</b>
          </p>

          <p className="text-3xl mb-2 ">Permanent Address</p>
          <p className="text-lg font-light italic ">
            {" "}
            123 Main Street, New York, NY 10030
            <br />
            City, District, State
            <br />
            pin: 364378
          </p>
        </div>
        <div className="xl:w-1/2 p-8 shadow-xl bg-white rounded-md">
          <p className="text-3xl mb-2 ">Course Details</p>
          <p className="text-lg font-light mb-2 italic ">
            {" "}
            Course: <b>B-Tech</b>
            <br />
            Quota: <b>NRI</b>
            <br />
            Academic Year: <b>2021-2025</b>
          </p>
          <p className="text-3xl mb-2 ">Branch Details</p>
          <p className="text-lg font-light italic ">
            {" "}
            Branch Opted: <b>Computer Science</b>
            <br />
            Status: <b>Waiting list 1</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
