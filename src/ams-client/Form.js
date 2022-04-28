import React from 'react';

const Form = () => {
  return <div className='w-screen space-x-3 flex h-screen p-6 bg-slate-300'>
    <div className="w-2/12 h-full flex flex-col items-center justify-between py-44 rounded-md bg-slate-800">
      <p className="text-xl italic  text-white">Personal Info</p>
      <p className="text-xl italic  text-white">Parent Info</p>
      <p className="text-xl italic  text-white">Payment</p>
      <p className="text-xl italic  text-white">Academic Info</p>
      </div>
    <div className="w-10/12 h-full rounded-md bg-slate-400"></div>
  </div>;
};

export default Form;
