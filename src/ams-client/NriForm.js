import React, { useState , useEffect} from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Zoom } from "react-toastify";

import home from "../Icons/home.svg";
import help from "../Icons/help.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NriForm = () => {

  const access = localStorage.getItem("access_token")
  const user = localStorage.getItem("user_id")
  const api = "https://ams-backend-api.herokuapp.com/user/application"
  const history = useNavigate();
  const[submitForm,setSubmitForm] = useState({})
  useEffect(() => {
    //Runs only on the first render
    axios.post(api,{token:access}).then(function (response) {
      submitForm.fname                 = response.data.user.firstName
      submitForm.mname                 = response.data.user.middleName
      submitForm.lname                 = response.data.user.lastName
      submitForm.dob                   = response.data.user.dob
      submitForm.phousename            = response.data.user.permanentAddress.addressL1
      submitForm.pcity                 = response.data.user.permanentAddress.city
      submitForm.pstate                = response.data.user.permanentAddress.state
      submitForm.pdistrict             = response.data.user.permanentAddress.district
      submitForm.ppin                  = response.data.user.permanentAddress.pincode
      submitForm.phone1                = response.data.user.aPhone
      submitForm.phone2                = response.data.user.phone
      submitForm.parentName            = response.data.user.guardianDetails.name
      submitForm.sponser               = response.data.user.NRIdetails.name
      submitForm.occupation            = response.data.user.fatherDetails.occupation
      submitForm.relationWithApplicant = response.data.user.guardianDetails.relation
      submitForm.transactionId         = response.data.user.transactionID
      submitForm.branch                = response.data.user.bp1
      setCurrentTab(false)
      setCurrentTab(true)
      console.log(response,user)  
      })
  },[]);
  const handleChange= (e) =>{
    const {value,id}=e.target;
    const newForm = {...submitForm};
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
    e.preventDefault()
    const ID = e.target.id; 
    const active_tab = "w-full border-t-[5px] items-center cursor-pointer flex justify-center bg-white border-pink-700";
    const active_header = "text-pink-700 text-2xl"
    const inactive_tab = "w-full hidden sm:flex border-b-[5px] items-center cursor-pointer justify-center border-pink-300";
    const inactive_header = "text-pink-300 text-2xl"
    if(ID === "tab1" || ID === "header1" || ID === "prev")
    {
      document.getElementById("tab1").className = active_tab;
      document.getElementById("header1").className = active_header
      document.getElementById("tab2").className = inactive_tab;
      document.getElementById("header2").className = inactive_header
      setCurrentTab(true)
    }
    else if(ID === "tab2" || ID === "header2" || ID === "next")
    {
      document.getElementById("tab2").className = active_tab;
      document.getElementById("header2").className = active_header
      document.getElementById("tab1").className = inactive_tab;
      document.getElementById("header1").className = inactive_header
      setCurrentTab(false)
    }
  }

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

  const logout=()=>{
    localStorage.removeItem("access_token")
    localStorage.removeItem("user_id")
    history("/login")
  }

  const formSubmit=(e)=>{
    e.preventDefault()
    console.log(submitForm)
    axios.patch(api+"/"+user,
    {
      firstName        : submitForm.firstName,
      middleName       : submitForm.middleName,
      lastName         : submitForm.lastName,
      dod              : submitForm.dob,
      addressL1p       : submitForm.phousename,
      districtp        : submitForm.pdistrict,
      cityp            : submitForm.pcity,
      statep           : submitForm.pstate,
      pincodep         : Number(submitForm.ppin),
      aPhone           : submitForm.phone1,
      phone            : submitForm.phone2,
      guardianName     : submitForm.parentName,
      fatherOccupation : submitForm.occupation,
      relation         : submitForm.relationWithApplicant,
      NRIname          : submitForm.sponser,
      transactionID    : submitForm.transactionId,
      bp1              : submitForm.branch,
    },
    {
      headers: {
        Authorization: 'Bearer ' + access
      }
    })
    .then((Response) => {
      if(Response.status === 200)
        toast.success("save successful")
        console.log(Response)
    })
    .catch(({ Response }) => {
      toast.error("Something went wrong try again later")
      if(Response)
      {
        toast.error("Something went wrong ERR_CODE: "+Response.status)
      }
    })

  }

  return (
    <div className="w-screen relative overflow-x-hidden h-screen flex pt-20 xl:pt-12 justify-center bg-zinc-700">
      <ToastContainer
        transition={Zoom}
        hideProgressBar={true}
        autoClose={5000}
        limit={1}
        className="mt-12"
        bodyClassName="text-black"
        closeOnClick={true}
      />
      <div className="w-full top-1 h-14 absolute z-20 flex items-center justify-between px-8">
        <button onClick={logout}>
          <Link to="/">
          <div className="w-auto px-4 text-white text-xl rounded-md hover:bg-pink-700 bg-pink-800 h-8">
            Log-Out
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
        className="w-[350px] sm:w-[600px] lg:w-[980px] h-auto border-[4px] bg-zinc-200 absolute z-20"
      >
        <div className="w-auto italic flex h-14">
          <div onClick={switchTab} id="tab1" className="w-full border-t-[5px] items-center cursor-pointer flex justify-center bg-white border-pink-700">
            <p onClick={switchTab} id="header1" className="text-pink-700 text-2xl">Personal Details</p>
          </div>
          <div onClick={switchTab} id="tab2" className="w-full hidden sm:flex border-b-[5px] items-center cursor-pointer justify-center border-pink-300">
            <p onClick={switchTab} id="header2" className="text-pink-300 text-2xl">Payment Details</p>
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
                    className="h-10 w-full lg:w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                  <input
                    placeholder="Middle"
                    type="text"
                    id="mname"
                    onChange={handleChange}
                    value={submitForm.mname}
                    className="h-10 lg:w-1/3 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                  <input
                    placeholder="Last"
                    type="text"
                    id="lname"
                    onChange={handleChange}
                    value={submitForm.lname}
                    className="h-10 lg:w-1/3 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
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
                      className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
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
                      className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                    />
                    {InvalidImgFormat && (
                      <p className="ml-3 text-red-700 font-mono text-center text-lg font-bold italic">
                        Unsupported Format
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 flex justify-center py-2 h-auto">
                <div className="flex rounded-md h-44 border-[3px] border-black">
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

            <div className="w-full h-auto lg:flex ">
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
                    className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                </div>
                <div className="lg:flex py-2 space-y-2 lg:space-y-0 lg:space-x-2 w-full">
                  <div className="lg:w-1/2">
                    <label className="text-lg  ml-3 italic">District*</label>
                    <input
                      placeholder="district"
                      type="text"
                      id="district"
                      value={submitForm.pdistrict}
                      onChange={handleChange}
                      className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <label className="text-lg  ml-3 italic">State*</label>
                    <input
                      placeholder="state"
                      type="text"
                      id="state"
                      value={submitForm.pstate}
                      onChange={handleChange}
                      className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
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
                      className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
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
                      className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
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
                    className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                </div>
                <div className="lg:flex py-2 space-y-2 lg:space-y-0 lg:space-x-2 w-full">
                  <div className="lg:w-1/2">
                    <label className="text-lg  ml-3 italic">
                      Name of Parent/Guardian*
                    </label>
                    <input
                      placeholder="Full Name"
                      type="text"
                      id="parentName"
                      value={submitForm.parentName}
                      onChange={handleChange}
                      className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
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
                      className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
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
                    className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full bg-white pt-4 h-auto space-y-2 p-4"></div>
        )}
          <div className="flex flex-row justify-center space-x-4">
            <button 
            className="w-auto px-4 text-white text-lg rounded-md hover:bg-pink-700 bg-pink-800 h-12">
              Save
            </button>
            <button 
            id={CurrentTab?"next":"prev"}
            onClick={switchTab}
            className="w-auto px-4 text-white text-lg rounded-md hover:bg-pink-700 bg-pink-800 h-12">
              {CurrentTab?"Next":"Prev"}
            </button>
          </div>
      </form>
    </div>
  );
};


export default NriForm;
