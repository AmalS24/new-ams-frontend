import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Zoom } from "react-toastify";
import home from "../SvgIcons/home.svg";
import help from "../SvgIcons/help.svg";

const NriForm = () => {
  const [ImagePreview, setImagePreview] = useState(null);
  const [InvalidImgFormat, setInvalidImgFormat] = useState(false);

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

  return (
    <div className="w-screen relative overflow-x-hidden h-screen flex pt-20 justify-center bg-zinc-700">
      <ToastContainer
        transition={Zoom}
        hideProgressBar={true}
        autoClose={10000}
        limit={1}
        className="mt-12"
        bodyClassName="text-sm md:text-md text-black"
        closeOnClick={true}
      />
      <div className="w-full top-1 h-14 absolute z-20 flex items-center justify-between px-8">
        <img src={home} alt="home" className="w-8 h-8 cursor-pointer" />

        <img
          onClick={() => {
            toast(str);
          }}
          src={help}
          alt="help"
          className="w-8 h-8 cursor-pointer"
        />
      </div>

      <form
        action=""
        className="w-[350px] sm:w-[600px] lg:w-[980px] h-auto border-[4px] bg-zinc-200 absolute z-20"
      >
        <div className="w-auto italic flex h-14">
          <div className="w-full border-t-[5px] items-center cursor-pointer flex justify-center bg-white border-pink-700">
            <p className="text-pink-700 text-2xl">Personal Details</p>
          </div>
          <div className="w-full hidden sm:flex border-b-[5px] items-center cursor-pointer justify-center border-pink-300">
            <p className="text-pink-300 text-2xl">Payment Details</p>
          </div>
        </div>

        {/* main-container */}
        <div className="w-full bg-white pt-4 h-auto space-y-2 p-4">
          {/* first-row-container */}
          <div className="w-full h-auto lg:flex ">
            {/* inner-2/3-vertical-partition */}
            <div className="w-full lg:w-2/3 p-4">
              {/* first-2/3-row-container */}
              <label className="text-md  ml-3 italic">Full Name*</label>
              <div className="w-full h-auto pb-2 space-y-2 lg:space-y-0 lg:space-x-3 lg:flex">
                {/* divide-2/3-again-vertically-1/3 three times */}
                <input
                  placeholder="First"
                  type="text"
                  className="h-10 w-full lg:w-1/3 border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                />
                <input
                  placeholder="Middle"
                  type="text"
                  className="h-10 lg:w-1/3 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                />
                <input
                  placeholder="Last"
                  type="text"
                  className="h-10 lg:w-1/3 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                />
              </div>
              <div className="w-full h-auto pb-1 lg:space-x-3 lg:flex">
                {/* second-2/3-row-container */}
                <div className="lg:w-1/3 pt-2">
                  {/* split-vertically-1/3-and-2/3 */}
                  <label className="text-md  ml-3 italic">Date of Birth*</label>
                  <input
                    placeholder=""
                    type="date"
                    className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                </div>
                <div className="lg:w-2/3 pt-2">
                  <label className="text-md  ml-3 italic">Photo Upload*</label>
                  <input
                    onChange={handleImageChange}
                    placeholder=""
                    type="file"
                    className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                  {InvalidImgFormat && (
                    <p className="ml-3 text-red-700 font-mono text-center text-md font-bold italic">
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
                  <img className="" src={ImagePreview}></img>
                )}
              </div>
            </div>
          </div>

          <div className="w-full h-auto lg:flex ">
            <div className="lg:w-1/2 p-2">
              <div>
                <label className="text-md  ml-3 italic">Contact Address*</label>
                <input
                  placeholder="House Name"
                  type="text"
                  className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                />
              </div>
              <div className="lg:flex py-2 space-y-2 lg:space-y-0 lg:space-x-2 w-full">
                <div className="lg:w-1/2">
                  <label className="text-md  ml-3 italic">District*</label>
                  <input
                    placeholder="House Name"
                    type="text"
                    className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                </div>
                <div className="lg:w-1/2">
                  <label className="text-md  ml-3 italic">State*</label>
                  <input
                    placeholder="House Name"
                    type="text"
                    className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                </div>
              </div>
              <div className="lg:flex py-2 space-y-2 lg:space-y-0 lg:space-x-2 w-full">
                <div className="lg:w-1/2">
                  <label className="text-md  ml-3 italic">City*</label>
                  <input
                    placeholder="City/Place"
                    type="text"
                    className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                </div>
                <div className="lg:w-1/2">
                  <label className="text-md  ml-3 italic">Pincode*</label>
                  <input
                    placeholder="xxxxxx"
                    type="text"
                    className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-2">
              <div>
                <label className="text-md  ml-3 italic">Name of Sponsor*</label>
                <input
                  placeholder="Full Name"
                  type="text"
                  className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                />
              </div>
              
              <div className="py-2">
                <label className="text-md  ml-3 italic">Relation with Applicant*</label>
                <input
                  placeholder="Father/Mother/First Blood relation"
                  type="text"
                  className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                />
              </div>

              <div className="lg:flex py-2 space-y-2 lg:space-y-0 lg:space-x-2 w-full">
                <div className="lg:w-1/2">
                  <label className="text-md  ml-3 italic">Name of Parent/Guardian*</label>
                  <input
                    placeholder="Full Name"
                    type="text"
                    className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                </div>
                <div className="lg:w-1/2">
                  <label className="text-md  ml-3 italic">Occupation*</label>
                  <input
                    placeholder="Parent's Occupation"
                    type="text"
                    className="h-10 w-full border-[2px] bg-white rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </form>
    </div>
  );
};
const str =
  "Consist of two parts" +
  " complete one part and click SAVE to save changes " +
  ",and proceed to next. Once two parts are completed " +
  "Click on Final SUBMIT to complete ";
setTimeout(() => {
  toast(str);
}, 3000);

export default NriForm;
