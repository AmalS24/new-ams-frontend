import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
      <div className='bg-gray-300 flex flex-col space-y-4'>
         <Link to="/registration">
             REGISTER
         </Link>
         <Link to="/login">
             SIGN-IN
         </Link>
      </div>
  )
}

export default Home;

