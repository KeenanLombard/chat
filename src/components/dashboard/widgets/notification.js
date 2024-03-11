import React from "react";

function notification() {
  let notifications = [
    { from: "Username", time: "12.23.5", avatar: "pix" },
    { from: "Username", time: "12.23.5", avatar: "pix" },
    { from: "Username", time: "12.23.5", avatar: "pix" },
  ];
  return (
    <div className='mb-5'>
      <header className='text-center dark:text-blue-500 my-4 font-bold text-white-900'>
        Important
      </header>
      <hr className='mx-5 my-2'></hr>
      <ul className='space-y-2'>
        {notifications.map((x) => (
          <li
            key={x.id}
            className='hover:bg-gray-100 dark:hover:bg-gray-700 flex cursor-pointer justify-around items-center space-x-2'>
            <div className='flex my-auto'>
              <img
                src='https://placekitten.com/40/40'
                alt={`Peer ${x.id} Avatar`}
                className='w-9 h-9 rounded-full mx-2'
              />
              <p className='font-bold my-auto mx-2'>{x.from}</p>
            </div>
            <div className=''>{x.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default notification;
