import React, { useState } from "react";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    // top down employee management
    <div className='flex justify-end py-2'>
      {/* <div className='w-full my-auto font-bold text-xl text-blue-900'>
        AgencyCore
      </div> */}
      <svg
        onClick={() => setIsModalOpen(!isModalOpen)}
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

      {isModalOpen && (
        <div className='fixed inset-0 flex items-center z-50'>
          <div className='absolute inset-0 bg-black opacity-50'></div>

          <div className='bg-white p-8 rounded shadow-lg z-10 h-screen'>
            <div className='flex justify-end'>
              <button
                className='text-gray-700 hover:text-red-500'
                onClick={closeModal}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6 18 18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <div>
              <div className='flex mx-2 my-4 hover:text-blue-500 font-bold text-xl cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6 mx-2'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z'
                  />
                </svg>
                Employees
              </div>
              <div className='flex mx-2 my-4 hover:text-blue-500 font-bold text-xl cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6 mx-2'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z'
                  />
                </svg>
                Analytics
              </div>
              <div className='flex mx-2 my-4 hover:text-blue-500 font-bold text-xl cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6 mx-2'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z'
                  />
                </svg>
                Chat
              </div>
              <div className='flex mx-2 my-4 hover:text-blue-500 font-bold text-xl cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6 mx-2'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z'
                  />
                </svg>
                Document Archive
              </div>
            </div>
          </div>
        </div>
      )}

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

export default Navbar;
