import React from 'react'
import "./Loader.css"

const Loader = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-trout-800  flex flex-col items-center justify-center">
	<div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
	<h2 className="text-center text-xl font-semibold">Loading...</h2>
	<p className="w-1/3 text-center ">Please Wait.</p>
</div>


    )
}

export default Loader
