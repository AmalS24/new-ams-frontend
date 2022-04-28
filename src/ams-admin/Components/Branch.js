import React from 'react';
import { useEffect } from 'react';

function Branch(props) {
    useEffect(()=>{
      document.getElementById(props.name+"total").value=63
      document.getElementById(props.name+"nri").value=3
      document.getElementById(props.name+"gov").value=30
      document.getElementById(props.name+"mgmt").value=30
    })
    const valueChange=(e)=>{
        console.log(e.target.value,e.target.id);
        if(e.target.value<0)
            e.target.value = 0;
    }
    const reset =(e)=>{
        e.preventDefault()
        document.getElementById(props.name+"total").value=63
        document.getElementById(props.name+"nri").value=3
        document.getElementById(props.name+"gov").value=30
        document.getElementById(props.name+"mgmt").value=30
    }
    const submit =(e)=>{
        e.preventDefault()

    }
  return <div className="w-1/3 h-auto bg-white p-3 shadow-xl rounded-md">
              <div className="w-full items-center justify-between py-4  flex">
                  <p className="text-xl font-semibold uppercase">{props.name}</p>
                  <div className="w-auto h-full space-x-2">
                      <button 
                      onClick={reset}
                      className='w-auto px-4 text-white text-lg rounded-md hover:bg-pink-700 bg-pink-800 h-auto'>
                          reset
                      </button>
                      <button 
                      onClick={submit}
                      className='w-auto px-4 text-white text-lg rounded-md hover:bg-pink-700 bg-pink-800 h-7'>
                          save
                      </button>
                  </div>
              </div>
              <div className="w-full h-auto sapce-x-4 flex">
                  <div className="w-auto h-auto p-1  flex flex-col space-y-2 ">
                    <p className="text-lg italic">TOTAL</p>
                  <input
                    type="number"
                    id={props.name+"total"}
                    onChange={valueChange}
                    className="h-8 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                  </div>
                  <div className="w-auto h-auto p-1  flex flex-col space-y-2 ">
                    <p className="text-lg italic">NRI</p>
                  <input
                    type="number"
                    id={props.name+"nri"}
                    onChange={valueChange}
                    className="h-8 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                  </div>
                  <div className="w-auto h-auto p-1  flex flex-col space-y-2 ">
                    <p className="text-lg italic">GOV</p>
                  <input
                    type="number"
                    id={props.name+"gov"}
                    onChange={valueChange}
                    className="h-8 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                  </div>
                  <div className="w-auto h-auto p-1  flex flex-col space-y-2 ">
                    <p className="text-lg italic">MGMT</p>
                  <input
                    type="number"
                    id={props.name+"mgmt"}
                    onChange={valueChange}
                    className="h-8 w-full border-[2px] rounded-md pl-4 text-xl focus:outline-none focus:border-pink-500 italic border-gray-500"
                  />
                  </div>
              </div>

          </div>;
}

export default Branch;
