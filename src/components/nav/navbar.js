import React from "react";

function navbar() {
  return (
    // top down employee management
    <div className='flex justify-between py-2'>
      <div className='w-full my-auto text-center font-bold text-xl text-blue-900'>
        AgencyCore
      </div>
      <ul className='flex justify-around w-full'>
        <li className='text-blue-900 font-bold rounded px-5 my-2 cursor-pointer'>
          Dashboard
        </li>
        <li className='text-blue-900 font-bold rounded px-5 my-2 cursor-pointer'>
          Chat
        </li>
        <li className='text-blue-900 font-bold rounded px-5 my-2 cursor-pointer'>
          Team
        </li>
        <li className='text-blue-900 font-bold rounded px-5 my-2 cursor-pointer'>
          Profile
        </li>
      </ul>
    </div>
  );
}

export default navbar;
