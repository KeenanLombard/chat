import React from "react";

function navbar() {
  return (
    // top down employee management
    <div className='flex justify-end py-2'>
      {/* <div className='w-full my-auto font-bold text-xl text-blue-900'>
        AgencyCore
      </div> */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        className='w-10 h-10 mx-2 cursor-pointer'>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
        />
      </svg>

      {/* <ul className='flex justify-around w-full'>
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
      </ul> */}
    </div>
  );
}

export default navbar;
