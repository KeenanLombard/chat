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
    { id: 1, name: "Admins" },
    { id: 2, name: "Development" },
    { id: 3, name: "Marketing" },
    // Add more peers as needed
  ];

  return (
    <div className='bg-gray-800 text-white p-4 h-screen w-1/4'>
      <h2 className='my-4 mt-0 text-2xl font-semibold mb-4'>Chats</h2>
      <hr className='mb-4'></hr>
      <ul className='space-y-2'>
        {chats.map((chat) => (
          <li
            key={chat.id}
            className='flex cursor-pointer items-center space-x-2'>
            <img
              src='https://placekitten.com/40/40'
              alt={`Peer ${chat.id} Avatar`}
              className='w-9 h-9 rounded-full'
            />
            <p className='text-white'>{chat.name}</p>
          </li>
        ))}
      </ul>
      <h2 className='my-4 text-2xl font-semibold mb-4'>Groups</h2>
      <hr className='mb-4'></hr>
      <ul className='space-y-2'>
        {groups.map((group) => (
          <li
            key={group.id}
            className='flex cursor-pointer items-center space-x-2'>
            <img
              src='https://placekitten.com/40/40'
              alt={`Peer ${group.id} Avatar`}
              className='w-9 h-9 rounded-full'
            />
            <p className='text-white'>{group.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
