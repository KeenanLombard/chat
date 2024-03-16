import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newNotification, setNewNotification] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  let bell;
  if (newNotification) {
    bell = (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        class='w-7 h-7 mx-2 cursor-pointer my-auto'>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0'
        />
      </svg>
    );
  } else {
    bell = (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        class='w-7 h-7 mx-2 cursor-pointer my-auto'>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5'
        />
      </svg>
    );
  }

  return (
    // top down employee management
    <div className='flex justify-between py-2'>
      <div className='my-auto flex font-bold'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-8 h-8'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z'
          />
        </svg>
        <p className='my-auto mx-2'>Office</p>
      </div>
      <div className='flex'>
        <Link className='my-auto' to='chat'>
          {bell}
        </Link>

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
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 flex items-center z-50'>
          <div className='absolute inset-0 bg-black opacity-50'></div>

          <div className='flex-col justify-between bg-white p-8 rounded shadow-lg z-10 h-screen w-1/4'>
            <div className=''>
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
                <Link to='/' onClick={() => closeModal()}>
                  {" "}
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
                        d='M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605'
                      />
                    </svg>
                    Dashboard
                  </div>
                </Link>
                <Link to='employees' onClick={() => closeModal()}>
                  {" "}
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
                </Link>
                <Link to='chat' onClick={() => closeModal()}>
                  {" "}
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
                    Chat
                  </div>
                </Link>
                <Link to='archive' onClick={() => closeModal()}>
                  {" "}
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
                    Documents
                  </div>
                </Link>
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
