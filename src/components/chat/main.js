import React from "react";
import Sidebar from "./sidebar";
const Chat = () => {
  return (
    <div className='flex-col'>
      <div className='w-full my-2 flex'>
        <div className='my-2 flex justify-between text-sm w-full md:w-1/4 '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-6 h-6 my-auto'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>

          <input
            className='border rounded py-1 px-2 mx-2 w-full'
            placeholder='search...'></input>
        </div>
      </div>
      <div className='flex'>
        <div className='w-1/2 shadow'>
          <Sidebar />
        </div>
        <div className='flex flex-col w-full shadow mx-2'>
          {/* Header */}
          <div className='flex justify-between mx-4'>
            <div>
              <h2 className=' text-xl font-bold text-center '>John</h2>
            </div>
            <div className='my-auto cursor-pointer hover:text-blue-500'>
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
                  d='M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z'
                />
              </svg>
            </div>
          </div>
          <hr className='m-4'></hr>

          {/* Chat Container */}
          <div className='p-4'>
            {/* Message List */}
            <div className='flex flex-col space-y-2'>
              {/* Individual Messages */}
              <div className='flex items-center space-x-2'>
                <img
                  src='https://placekitten.com/40/40'
                  alt='User Avatar'
                  className='w-8 h-8 rounded-full'
                />
                <div className='bg-gray-800 p-2 rounded-md'>
                  <p className='text-white'>Hello, how are you?</p>
                </div>
              </div>

              {/* Add more messages as needed */}
            </div>
          </div>

          {/* Input Area */}
          <div className='bg-gray-100 p-4'>
            <input
              type='text'
              placeholder='Type your message...'
              className='w-full p-2 rounded-md'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
