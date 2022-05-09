import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Zoom } from "react-toastify";

import help from "../Icons/help.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NriForm = () => {
  const access = localStorage.getItem("access_token");
  const user = localStorage.getItem("user_id");
  const api = "https://ams-backend-api.herokuapp.com/user/nri/application";
  const history = useNavigate();
  const [submitForm, setSubmitForm] = useState({});
  useEffect(() => {
    //Runs only on the first render
    axios.post(api, { token: access }).then(function (response) {
      submitForm.fname = response.data.user.firstName;
      submitForm.mname = response.data.user.middleName;
      submitForm.lname = response.data.user.lastName;
      submitForm.dob = response.data.user.dob;
      submitForm.phousename = response.data.user.permanentAddress.addressL1;
      submitForm.pcity = response.data.user.permanentAddress.city;
      submitForm.pstate = response.data.user.permanentAddress.state;
      submitForm.pdistrict = response.data.user.permanentAddress.district;
      submitForm.ppin = response.data.user.permanentAddress.pincode;
      submitForm.phone1 = response.data.user.aPhone;
      submitForm.phone2 = response.data.user.phone;
      submitForm.parentName = response.data.user.guardianDetails.name;
      submitForm.sponser = response.data.user.NRIdetails.name;
      submitForm.occupation = response.data.user.fatherDetails.occupation;
      submitForm.relationWithApplicant =
        response.data.user.guardianDetails.relation;
      submitForm.transactionId = response.data.user.transactionID;
      submitForm.branch = response.data.user.bp1;
      setCurrentTab(false);
      setCurrentTab(true);
      console.log(response, user);
    });
    axios
      .get(api, {
        headers: {
          Authorization: "Bearer " + access,
        },
      })
      .then((res) => {
        console.log(res.data);
        submitForm.fname = res.data.firstName;
        submitForm.mname = res.data.middleName;
        submitForm.lname = res.data.lastName;
        submitForm.dob = res.data.dob;
        submitForm.phousename = res.data.permanentAddress.addressL1;
        submitForm.pdistrict = res.data.permanentAddress.district;
        submitForm.pstate = res.data.permanentAddress.state;
        submitForm.pcity = res.data.permanentAddress.city;
        submitForm.ppin = res.data.permanentAddress.pincode;
        submitForm.sponser = res.data.sponserName;
        submitForm.relationWithApplicant = res.data.gruardianRelation;
        submitForm.branch = res.data.selectedBranch;
        submitForm.transactionId = res.data.transactionID;
        submitForm.parentName = res.data.guardianName;
        submitForm.occupation = res.data.guardianOccupation;
        submitForm.branch = res.data.selectedBranch;

        setCurrentTab(false);
        setCurrentTab(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleChange = (e) => {
    const { value, id } = e.target;
    const newForm = { ...submitForm };
    newForm[id] = value;
    setSubmitForm(newForm);
    console.log(newForm);
  };

  const [CurrentTab, setCurrentTab] = useState(true);
  const [ImagePreview, setImagePreview] = useState(null);
  const [InvalidImgFormat, setInvalidImgFormat] = useState(false);
  const info =
    "Consist of two parts" +
    " complete one part and click SAVE to save changes " +
    ",and proceed to next. Once two parts are completed " +
    "Click on Final SUBMIT to complete ";

  const switchTab = (e) => {
    e.preventDefault();
    const ID = e.target.id;
    const active_tab =
      "w-full border-t-[5px] items-center cursor-pointer flex justify-center bg-white border-slate-600";
    const active_header = "text-slate-600 text-2xl";
    const inactive_tab =
      "w-full hidden sm:flex border-b-[5px] items-center cursor-pointer justify-center border-slate-300";
    const inactive_header = "text-slate-300 text-2xl";
    if (ID === "tab1" || ID === "header1" || ID === "prev") {
      document.getElementById("tab1").className = active_tab;
      document.getElementById("header1").className = active_header;
      document.getElementById("tab2").className = inactive_tab;
      document.getElementById("header2").className = inactive_header;
      setCurrentTab(true);
    } else if (ID === "tab2" || ID === "header2" || ID === "next") {
      document.getElementById("tab2").className = active_tab;
      document.getElementById("header2").className = active_header;
      document.getElementById("tab1").className = inactive_tab;
      document.getElementById("header1").className = inactive_header;
      setCurrentTab(false);
    }
  };

  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/jpg", "image/jpeg", "image/png"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      setInvalidImgFormat(false);
      let reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setInvalidImgFormat(true);
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_id");
    history("/login");
  };

  // const formSubmit=(e)=>{
  //   e.preventDefault()
  //   console.log(submitForm)
  //   axios.patch(api+"/"+user,
  //   {
  //     firstName        : submitForm.firstName,
  //     middleName       : submitForm.middleName,
  //     lastName         : submitForm.lastName,
  //     dob              : submitForm.dob,
  //     addressL1P       : submitForm.phousename,
  //     districtP        : submitForm.pdistrict,
  //     cityP            : submitForm.pcity,
  //     stateP           : submitForm.pstate,
  //     pincodeP         : Number(submitForm.ppin),
  //     aPhone           : submitForm.phone1,
  //     phone            : submitForm.phone2,
  //     guardianName     : submitForm.parentName,
  //     fatherOccupation : submitForm.occupation,
  //     relation         : submitForm.relationWithApplicant,
  //     NRIname          : submitForm.sponser,
  //     transactionID    : submitForm.transactionId,
  //     bp1              : submitForm.branch,
  //   },
  //   {
  //     headers: {
  //       Authorization: 'Bearer ' + access
  //     }
  //   })
  //   .then((Response) => {
  //     if(Response.status === 200)
  //       toast.success("save successful")
  //       console.log(Response)
  //   })
  //   .catch(({ Response }) => {
  //     toast.error("Something went wrong try again later")
  //     if(Response)
  //     {
  //       toast.error("Something went wrong ERR_CODE: "+Response.status)
  //     }
  //   })

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(submitForm);
    const data = {
      firstName: submitForm.fname,
      middleName: submitForm.mname,
      lastName: submitForm.lname,
      dob: submitForm.dob,
      addressL1P: submitForm.phousename,
      districtP: submitForm.pdistrict,
      cityP: submitForm.pcity,
      stateP: submitForm.pstate,
      pincodeP: Number(submitForm.ppin),
      aPhone: submitForm.phone1,
      phone: submitForm.phone2,
      guardianName: submitForm.parentName,
      guardianOccupation: submitForm.occupation,
      guardianRelation: submitForm.relationWithApplicant,
      NRIname: submitForm.sponser,
      transactionID: submitForm.transactionId,
      bp1: "CSE",
    };
    axios
      .patch(api + "/" + user, data, {
        headers: {
          Authorization: "Bearer " + access,
        },
      })
      .then((Response) => {
        if (Response.status === 200) toast.success("save successful");
        console.log(Response);
      })
      .catch(({ Response }) => {
        toast.error("Something went wrong try again later");
        if (Response) {
          toast.error("Something went wrong ERR_CODE: " + Response.status);
        }
      });
    console.log(data);
  };
  const checkSeat = () => {
    const branch = document.getElementById("branch").value;
    console.log(branch);
  };

  const enableButton = () => {
    const isChecked = document.getElementById("check").checked;
    document.getElementById.disabled = true;
    if (isChecked) {
      document.getElementById("finalButton").disabled = false;
      document.getElementById("finalButton").className =
        "w-auto mt-8 h-auto hover:bg-green-600 p-2 rounded-md bg-slate-600 text-white";
    }
  };

  return (
    <div className="min-w-screen h-screen relative  flex py-20 xl:pt-12  justify-center bg-zinc-700">
      <ToastContainer
        transition={Zoom}
        hideProgressBar={true}
        autoClose={5000}
        limit={1}
        className="mt-12"
        bodyClassName="text-black"
        closeOnClick={true}
      />
      <div className="w-full  top-1 h-14 absolute z-20 flex items-center justify-between px-8">
        <button onClick={logout}>
          <Link to="/">
            <div className="text-white uppercase italic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="w-8 h-8"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
            </div>
          </Link>
        </button>

        <img
          onClick={() => {
            toast(info);
          }}
          src={help}
          alt="help"
          className="w-8 h-8 cursor-pointer"
        />
      </div>

      <form
        action=""
        onSubmit={formSubmit}
        className="w-[350px] sm:w-[600px] lg:w-[980px] h-auto  border-[4px] bg-zinc-200 rounded-[6px] absolute z-20"
      >
        <div className="w-auto italic flex h-14">
          <div
            onClick={switchTab}
            id="tab1"
            className="w-full border-t-[5px] items-center cursor-pointer flex justify-center bg-white border-slate-600"
          >
            <p
              onClick={switchTab}
              id="header1"
              className="text-slate-600 text-2xl"
            >
              Personal Details
            </p>
          </div>
          <div
            onClick={switchTab}
            id="tab2"
            className="w-full hidden sm:flex border-b-[5px] items-center cursor-pointer justify-center border-slate-300"
          >
            <p
              onClick={switchTab}
              id="header2"
              className="text-slate-300 text-2xl"
            >
              Payment Details
            </p>
          </div>
        </div>

        {CurrentTab ? (
          <div className="w-full bg-white pt-4 h-auto space-y-2 p-4">
            <div className="w-full h-auto lg:flex ">
              <div className="w-full lg:w-2/3 p-4">
                <label className="text-lg  ml-3 italic">Full Name*</label>
                <div className="w-full h-auto pb-2 space-y-2 lg:space-y-0 lg:space-x-3 lg:flex">
                  <input
                    placeholder="First"
                    type="text"
                    id="fname"
                    value={submitForm.fname}
                    onChange={handleChange}
                    className="h-10 w-full lg:w-1/3  border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-teal-500 italic border-slate-700"
                  />
                  <input
                    placeholder="Middle"
                    type="text"
                    id="mname"
                    onChange={handleChange}
                    value={submitForm.mname}
                    className="h-10 lg:w-1/3 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-teal-500 italic border-slate-700"
                  />
                  <input
                    placeholder="Last"
                    type="text"
                    id="lname"
                    onChange={handleChange}
                    value={submitForm.lname}
                    className="h-10 lg:w-1/3 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-teal-500 italic border-slate-700"
                  />
                </div>
                <div className="w-full h-auto pb-1 lg:space-x-3 lg:flex">
                  <div className="lg:w-1/3 pt-2">
                    <label className="text-lg  ml-3 italic">
                      Date of Birth*
                    </label>
                    <input
                      placeholder=""
                      type="date"
                      className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-teal-500 italic border-slate-700"
                    />
                  </div>
                  <div className="lg:w-2/3 pt-2">
                    <label className="text-lg  ml-3 italic">
                      Photo Upload*
                    </label>
                    <input
                      onChange={handleImageChange}
                      placeholder=""
                      type="file"
                      className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-teal-500 italic border-slate-700"
                    />
                    {InvalidImgFormat && (
                      <p className="ml-3 text-red-700 font-mono text-center text-lg font-bold italic">
                        Unsupported Format
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 flex  justify-center p-2 h-auto">
                <div className="flex h-44 border-[3px] border-black">
                  {!ImagePreview || InvalidImgFormat ? (
                    <>
                      <p className="text-center my-8 italic">
                        Size:300-800kb
                        <br />
                        Resolution: 600x800
                        <br />
                        <u>Supported formats</u>
                        <br />
                        jpg,jpeg,png
                      </p>
                    </>
                  ) : (
                    <img className="" alt="profile" src={ImagePreview}></img>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full py-3 h-auto lg:flex ">
              <div className="lg:w-1/2 p-2">
                <div>
                  <label className="text-lg  ml-3 italic">
                    Permanent Address*
                  </label>
                  <input
                    placeholder="House Name"
                    type="text"
                    id="phousename"
                    value={submitForm.phousename}
                    onChange={handleChange}
                    className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-teal-500 italic border-slate-700"
                  />
                </div>
                <div className="lg:flex py-3 space-y-2 lg:space-y-0 lg:space-x-2 w-full">
                  <div className="lg:w-1/2">
                    <label className="text-lg  ml-3 italic">District*</label>
                    <input
                      placeholder="district"
                      type="text"
                      id="pdistrict"
                      value={submitForm.pdistrict}
                      onChange={handleChange}
                      className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-teal-500 italic border-slate-700"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <label className="text-lg  ml-3 italic">State*</label>
                    <input
                      placeholder="state"
                      type="text"
                      id="pstate"
                      value={submitForm.pstate}
                      onChange={handleChange}
                      className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-teal-500 italic border-slate-700"
                    />
                  </div>
                </div>
                <div className="lg:flex py-2 space-y-2 lg:space-y-0 lg:space-x-2 w-full">
                  <div className="lg:w-1/2">
                    <label className="text-lg  ml-3 italic">City*</label>
                    <input
                      placeholder="City/Place"
                      type="text"
                      id="pcity"
                      value={submitForm.pcity}
                      onChange={handleChange}
                      className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-teal-500 italic border-slate-700"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <label className="text-lg  ml-3 italic">Pincode*</label>
                    <input
                      placeholder="xxxxxx"
                      type="text"
                      id="ppin"
                      value={submitForm.ppin}
                      onChange={handleChange}
                      className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-teal-500 italic border-slate-700"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-2">
                <div>
                  <label className="text-lg  ml-3 italic">
                    Name of Sponsor*
                  </label>
                  <input
                    placeholder="Full Name"
                    type="text"
                    id="sponser"
                    value={submitForm.sponser}
                    onChange={handleChange}
                    className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-teal-500 italic border-slate-700"
                  />
                </div>
                <div className="lg:flex py-3 space-y-2 lg:space-y-0 lg:space-x-2 w-full">
                  <div className="lg:w-1/2">
                    <label className="text-lg ml-3 italic">
                      Parent/Guardian*
                    </label>
                    <input
                      placeholder="Full Name"
                      type="text"
                      id="parentName"
                      value={submitForm.parentName}
                      onChange={handleChange}
                      className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-teal-500 italic border-slate-700"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <label className="text-lg  ml-3 italic">Occupation*</label>
                    <input
                      placeholder="Parent's Occupation"
                      type="text"
                      id="occupation"
                      value={submitForm.occupation}
                      onChange={handleChange}
                      className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-teal-500 italic border-slate-700"
                    />
                  </div>
                </div>
                <div className="py-2">
                  <label className="text-lg  ml-3 italic">
                    Relation with Applicant*
                  </label>
                  <input
                    placeholder="Father/Mother/First Blood relation"
                    type="text"
                    id="relationWithApplicant"
                    value={submitForm.relationWithApplicant}
                    onChange={handleChange}
                    className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-teal-500 italic border-slate-700"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full bg-white h-auto ">
            <div className="flex flex-col space-y-3 items-center p-6 justify-center">
              <h1 className="sm:text-xl text-center text-lg font-semi-bold">
                Please Note :{" "}
                <b className="text-blue-700  italic">
                  Pay adavance provisional registration fee of Rs.1,00,500 to
                  the following bank account and upload the photo of transaction
                  slip here{" "}
                </b>
              </h1>
              <div className="w-full flex lg:flex-row flex-col h-auto bg-gray-300">
                <div className="lg:w-1/2 h-auto text-center space-y-2 p-3 bg-white">
                  <p className="sm:text-xl text-lg italic">
                    Name: <b>Muthoot M George Institute of Technology</b>
                  </p>
                  <p className="sm:text-xl text-lg italic">
                    Address: <b>Varikoli ,Puthencruz - 682308</b>
                  </p>
                  <p className="sm:text-xl text-lg italic">
                    Phone: <b>0484-2732100</b>
                  </p>
                  <p className="sm:text-xl text-lg italic">
                    Bank: <b>FEDERAL BANK LTD</b>
                  </p>
                  <p className="sm:text-xl text-lg italic">
                    Address: <b>PUTHENCRUZ</b>
                  </p>
                  <p className="sm:text-xl text-lg italic">
                    Branch: <b>Puthencruz</b>
                  </p>
                  <p className="sm:text-xl text-lg italic">
                    Phone: <b>0484-2731259</b>
                  </p>
                  <p className="sm:text-xl text-lg italic">
                    Account No.: <b>122330200217387</b>
                  </p>
                  <p className="sm:text-xl text-lg italic">
                    IFSC Code: <b>FDRL0001223</b>
                  </p>
                  <p className="sm:text-xl text-lg italic">
                    MICR Code: <b>682049055</b>
                  </p>
                </div>
                <div className="lg:w-1/2 h-auto text-center space-y-2 p-3 bg-white">
                  <div className="h-auto p-4 sm:p-4 space-y-3 w-full">
                    <label className="text-lg lg:text-xl  ml-3 italic">
                      Transaction Document*
                    </label>
                    <input
                      placeholder=""
                      type="file"
                      className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-teal-500 italic border-slate-700"
                    />
                  </div>
                  <div className="h-auto lg:p-4 sm:p-4 space-y-3 w-full">
                    <p className="text-lg lg:text-xl italic">
                      Branch Preference*
                    </p>
                    <select
                      name="branch pref"
                      className="h-11 w-full border-[2px] rounded-md pl-2 text-md sm:text-xl focus:outline-none focus:border-teal-500 italic border-slate-700"
                      id="branch"
                      onChange={handleChange}
                      value={submitForm.branch}
                    >
                      <option value=""></option>
                      <option value="CSE">Computer Science Engineering</option>
                      <option value="ECE">
                        Electronics And Communications Engineering
                      </option>
                      <option value="EEE">
                        Electrical And Electronics Engineering
                      </option>
                      <option value="CE">Civil Engineering</option>
                      <option value="ME">Mechanical Engineering</option>
                    </select>
                    <p className="text-lg italic">You are in waiting list</p>
                  </div>
                  <div className="w-auto h-auto flex items-center px-6">
                    <input
                      id="check"
                      type="checkbox"
                      // onChange={enableButton}
                      className="md:w-6 mb-6 md:h-6 h-auto"
                    />
                    <p className="text-md lg:text-lg  ">
                      I agree that I have reviewed the form, and is proceeding
                      for finalsubmit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-row pb-6 pr-8 justify-end bg-white space-x-4">
          <button
            id={CurrentTab ? "next" : "prev"}
            onClick={switchTab}
            className="w-auto px-4 text-white text-lg rounded-md hover:bg-teal-500 bg-teal-600 h-11"
          >
            {CurrentTab ? "Next" : "Prev"}
          </button>
          <button className="w-auto px-4 text-white text-lg rounded-md hover:bg-slate-600 bg-slate-800 h-11">
            Save
          </button>
          {!CurrentTab && (
            <button
              id="finalButton"
              className="w-auto px-4 text-white text-lg rounded-md hover:bg-red-500 bg-red-600 h-11"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NriForm;
