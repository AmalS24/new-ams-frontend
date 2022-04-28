import React from 'react';
import Branch from '../Components/Branch';

function Settings() {
  return <div className="overflow-x-auto h-[720px] w-[350px] sm:w-auto  rounded-md p-3 ">
     <div className="w-full h-auto p-3 flex space-x-2 ">
            <Branch name="cse"/>
            <Branch name="cse-ai"/>
            <Branch name="eee"/>
      </div>
      <div className="w-full h-auto p-3 flex space-x-2 ">
            <Branch name="me"/>
            <Branch name="ce"/>    
            <Branch name="ece"/>    
      </div>
  </div>;
}

export default Settings;

