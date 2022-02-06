import React from 'react'
import "./Loader.css"

const Loader = () => {
    return (
        <div className=" w-screen h-screen z-50 overflow-hidden bg-white  flex flex-col space-y-8 items-center justify-center">
	<div className="loader ease-linear rounded-full  border-t-[5px] border-gray-200 h-20 w-20 mb-4"></div>
    <h1 className="text-3xl">Please wait</h1>
</div>


    )
}

export default Loader
