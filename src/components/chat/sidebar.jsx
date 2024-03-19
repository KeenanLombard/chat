// src/components/Sidebar.js
import React from "react";

const Sidebar = () => {
  const chats = [
    { id: 1, name: "John" },
    { id: 2, name: "Peter" },
    { id: 3, name: "Abigail" },
    // Add more peers as needed
  ];
  const groups = [
    { id: 1, name: "Alerts" },
    { id: 2, name: "Ask your business" },
    // Add more peers as needed
  ];

  return (
    <div className=' h-screen w-full'>
      <h2 className=' text-xl font-bold text-center'>System</h2>
      <hr className='m-4'></hr>
      <ul className='space-y-2'>
        {groups.map((chat) => (
          <li
            key={chat.id}
            className='px-2 w-full py-4 flex cursor-pointer items-center space-x-2 hover:text-blue-500 hover:shadow'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-8 h-8 m-2'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
              />
            </svg>

            <div>
              <p className='font-bold'>{chat.name}</p>
              <p className='text-sm text-neutral-500'>
                Lorum ipsum dolor amet dummy text...
              </p>
            </div>
          </li>
        ))}
      </ul>
      <h2 className=' text-xl font-bold text-center m-4'>Chats</h2>
      <hr className='m-4'></hr>
      <ul className='space-y-2'>
        {chats.map((chat) => (
          <li
            key={chat.id}
            className='px-2 w-full py-4 flex cursor-pointer items-center space-x-2 hover:text-blue-500 hover:shadow'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-8 h-8 m-2'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
              />
            </svg>

            <div>
              <p className='font-bold'>{chat.name}</p>
              <p className='text-sm text-neutral-500'>
                Lorum ipsum dolor amet dummy text...
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
